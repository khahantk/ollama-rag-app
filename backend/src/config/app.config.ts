export default () => ({
  port: process.env.PORT ? parseInt(process.env.PORT, 10) : 3000,
  chromaUrl: process.env.CHROMA_URL || 'http://localhost:8000',
  ollamaUrl: process.env.OLLAMA_URL || 'http://localhost:11434/',
  ollamaModel: process.env.OLLAMA_MODEL || 'llama3',
});
