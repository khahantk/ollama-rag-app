export default () => ({
  chromaUrl: process.env.CHROMA_URL || 'http://localhost:8000',
  ollamaUrl: process.env.OLLAMA_URL || 'http://localhost:11434/api/generate',
  ollamaModel: process.env.OLLAMA_MODEL || 'llama3',
});
