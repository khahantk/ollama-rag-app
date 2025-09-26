"use client";
import { useState } from "react";
import { askQuestion } from "../lib/rag-api";

export default function HomePage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const sendQuestion = async () => {
    const res = await askQuestion(input);
    setMessages([...messages, { role: "user", content: input }, { role: "assistant", content: res.answer }]);
    setInput("");
  };

  return (
    <div className="p-6 max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-4">Ollama RAG App</h1>
      <div className="space-y-2 border p-4 rounded bg-gray-50 h-96 overflow-y-auto">
        {messages.map((m, i) => (
          <div key={i} className={m.role === "user" ? "text-blue-600" : "text-green-600"}>
            <b>{m.role}:</b> {m.content}
          </div>
        ))}
      </div>
      <div className="flex gap-2 mt-4">
        <input
          className="border p-2 flex-1"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask something..."
        />
        <button onClick={sendQuestion} className="bg-blue-600 text-white px-4 py-2 rounded">
          Send
        </button>
      </div>
    </div>
  );
}
