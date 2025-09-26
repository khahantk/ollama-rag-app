import { Injectable } from '@nestjs/common';
import { ChromaService } from '../chroma/chroma.service';
import { OllamaService } from '../ollama/ollama.service';

@Injectable()
export class RagService {
  constructor(
    private readonly chroma: ChromaService,
    private readonly ollama: OllamaService,
  ) {}

  async answerQuestion(question: string) {
    // 1. Retrieve similar docs from ChromaDB
    const results = await this.chroma.query(question, 3);
    const context = results.map((doc) => doc.pageContent).join('\n');

    // 2. Call Ollama with context
    const answer = await this.ollama.askWithContext(question, context);

    return { question, answer, context };
  }
}
