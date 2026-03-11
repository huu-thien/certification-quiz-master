// api/explain.ts — Vercel Serverless Function (use Groq)
import type { VercelRequest, VercelResponse } from "@vercel/node";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const optionLabels = ["A", "B", "C", "D", "E", "F"];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  const { question, options, correctAnswer, correctAnswers, isMultiSelect } = req.body ?? {};
  if (!question || !options) return res.status(400).json({ error: "Missing fields" });

  const correctIdx: number[] = isMultiSelect ? correctAnswers : [correctAnswer];
  const optionLines = (options as string[]).map((o, i) => `${optionLabels[i]}. ${o}`).join("\n");
  const correctLines = correctIdx.map((i) => `${optionLabels[i]}. ${options[i]}`).join(", ");

  const prompt = `Bạn là chuyên gia ISTQB. Hãy trả lời theo đúng định dạng JSON sau, không thêm bất kỳ text nào ngoài JSON:

{
  "questionVN": "<dịch câu hỏi sang tiếng Việt tự nhiên>",
  "optionsVN": ["<dịch đáp án A>", "<dịch đáp án B>", "<dịch đáp án C>", "<dịch đáp án D>"],
  "explanation": "<Giải thích rõ lý do trong 2-3 câu. Sau đó giải thích ngắn gọn tại sao từng đáp án còn lại sai, mỗi đáp án 1 câu. Dùng tiếng Việt tự nhiên.>"
}

Câu hỏi gốc (tiếng Anh):
${question}

Các đáp án:
${optionLines}

Đáp án đúng: ${correctLines}`;

  try {
    const groqRes = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1024,
        temperature: 0.3,
      }),
    });

    if (!groqRes.ok) {
      const err = await groqRes.text();
      return res.status(502).json({ error: "Groq API error", detail: err });
    }

    const data = await groqRes.json();
    const raw: string = data?.choices?.[0]?.message?.content ?? "";
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) return res.status(502).json({ error: "Invalid JSON response" });

    const parsed = JSON.parse(jsonMatch[0]);
    return res.status(200).json({
      questionVN: parsed.questionVN ?? "",
      optionsVN: parsed.optionsVN ?? [],
      explanation: parsed.explanation ?? "",
    });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" + err });
  }
}
