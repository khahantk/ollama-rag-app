import { Injectable } from '@nestjs/common';
import { Ollama } from '@langchain/ollama';

@Injectable()
export class OllamaService {
  private model: Ollama;

  constructor() {
    this.model = new Ollama({
      baseUrl: process.env.OLLAMA_URL || 'http://localhost:11434',
      model: process.env.OLLAMA_MODEL || 'llama3',
    });
  }

  async askWithContext(question: string, context: string) {
    const prompt = `Answer the following question using the context below. 
If the context is not relevant, say you don’t know.

Context:
${context}

Question: ${question}`;

    const response = await this.model.invoke(prompt);
    return response;
  }
}
