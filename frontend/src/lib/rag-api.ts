export async function askQuestion(question: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/rag/ask`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question }),
    cache: "no-store",
  });
  return res.json();
}
