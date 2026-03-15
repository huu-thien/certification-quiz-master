// api/explain.ts — Vercel Serverless Function (dùng Groq)
import type { VercelRequest, VercelResponse } from "@vercel/node";

const GROQ_URL = "https://api.groq.com/openai/v1/chat/completions";
const optionLabels = ["A", "B", "C", "D", "E", "F", "G", "H"];

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  if (req.method === "OPTIONS") return res.status(200).end();
  if (req.method !== "POST")
    return res.status(405).json({ error: "Method not allowed" });

  const { question, options, correctAnswer, correctAnswers, isMultiSelect } =
    req.body ?? {};
  if (!question || !options)
    return res.status(400).json({ error: "Missing fields" });

  // Sanitize: xóa control characters gây lỗi JSON parse
  // eslint-disable-next-line no-control-regex
  const sanitize = (s: string) => s.replace(/[\x00-\x1F\x7F]/g, " ").trim();
  const cleanQuestion = sanitize(question);
  const cleanOptions = (options as string[]).map(sanitize);

  const correctIdx: number[] = isMultiSelect ? correctAnswers : [correctAnswer];
  const optionLines = cleanOptions
    .map((o: string, i: number) => `${optionLabels[i]}. ${o}`)
    .join("\n");
  const correctLines = correctIdx
    .map((i: number) => `${optionLabels[i]}. ${cleanOptions[i]}`)
    .join(", ");
  const optionCount = cleanOptions.length;
  const optionPlaceholders = cleanOptions
    .map((_: string, i: number) => `"<dịch đáp án ${optionLabels[i]}>"`)
    .join(", ");

  const prompt = `Bạn là chuyên gia ISTQB. Hãy trả lời theo đúng định dạng JSON sau, không thêm bất kỳ text nào ngoài JSON:

{
  "questionVN": "<dịch câu hỏi sang tiếng Việt tự nhiên>",
  "optionsVN": [${optionPlaceholders}],
  "explanation": "<Giải thích rõ lý do đáp án X đúng trong 3-4 câu. Sau đó giải thích ngắn gọn tại sao từng đáp án còn lại sai, mỗi đáp án 1 câu, bắt đầu bằng 'Đáp án Y sai vì...'. Dùng tiếng Việt tự nhiên, KHÔNG viết dính các câu lại với nhau.>"
}

QUAN TRỌNG: mảng optionsVN phải có đúng ${optionCount} phần tử tương ứng với ${optionCount} đáp án bên dưới.

Câu hỏi gốc (tiếng Anh):
${cleanQuestion}

Các đáp án (${optionCount} đáp án):
${optionLines}

Đáp án đúng: ${correctLines}`;

  try {
    const groqRes = await fetch(GROQ_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
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
    if (!jsonMatch)
      return res.status(502).json({ error: "Invalid JSON response" });

    // Sanitize: thay newline thật bên trong JSON string thành escaped
    const safeJson = jsonMatch[0].replace(
      /"((?:[^"\\]|\\.)*)"/g,
      (_: string, inner: string) =>
        '"' +
        inner.replace(/\n/g, "\\n").replace(/\r/g, "").replace(/\t/g, " ") +
        '"',
    );

    let parsed: {
      questionVN?: string;
      optionsVN?: string[];
      explanation?: string;
    };
    try {
      parsed = JSON.parse(safeJson);
    } catch {
      return res.status(502).json({ error: "Invalid JSON response" });
    }
    return res.status(200).json({
      questionVN: parsed.questionVN ?? "",
      optionsVN: parsed.optionsVN ?? [],
      explanation: parsed.explanation ?? "",
    });
  } catch (err) {
    return res.status(500).json({ error: "Internal server error" + err });
  }
}
