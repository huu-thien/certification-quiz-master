// server.cjs — Local dev proxy use Groq (free, no billing)
// npm install express cors dotenv node-fetch@2
// Run: node server.cjs

require("dotenv").config();

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

const API_KEY = process.env.GROQ_API_KEY;
if (!API_KEY) {
  console.error("❌ GROQ_API_KEY chưa được set trong file .env!");
  process.exit(1);
} else {
  console.log("✅ GROQ_API_KEY loaded");
}

app.post("/api/explain", async (req, res) => {
  try {
    const { question, options, correctAnswer, correctAnswers, isMultiSelect } =
      req.body ?? {};

    if (!question || !options) {
      return res.status(400).json({ error: "Missing question or options" });
    }

    const correctIdx = isMultiSelect ? correctAnswers : [correctAnswer];
    const optionLabels = ["A", "B", "C", "D", "E"];

    const optionLines = options
      .map((opt, i) => `${optionLabels[i]}. ${opt}`)
      .join("\n");

    const correctLines = correctIdx
      .map((i) => `${optionLabels[i]}. ${options[i]}`)
      .join(", ");

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

    const groqRes = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama-3.1-8b-instant",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 1024,
        temperature: 0.3,
      }),
    });

    if (!groqRes.ok) {
      const errText = await groqRes.text();
      console.error("❌ Groq API error:", groqRes.status, errText);
      return res.status(502).json({ error: "Groq API error", detail: errText });
    }

    const data = await groqRes.json();
    const raw = data?.choices?.[0]?.message?.content ?? "";

    // Parse JSON từ response
    const jsonMatch = raw.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      console.error("❌ Cannot parse JSON from Groq:", raw);
      return res.status(502).json({ error: "Invalid JSON response" });
    }

    const parsed = JSON.parse(jsonMatch[0]);
    console.log("✅ Explanation generated for:", question.slice(0, 50) + "...");
    return res.status(200).json({
      questionVN: parsed.questionVN ?? "",
      optionsVN: parsed.optionsVN ?? [],
      explanation: parsed.explanation ?? "",
    });
  } catch (err) {
    console.error("❌ Server crash:", err);
    return res.status(500).json({ error: err.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`🚀 Dev proxy running at http://localhost:${PORT}`);
});
