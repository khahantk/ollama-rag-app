export async function askQuestion(question: string) {
  const res = await fetch("http://localhost:3000/rag/ask", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
    cache: "no-store",
  });
  return res.json();
}
