import { Injectable } from '@nestjs/common';
import { Chroma } from '@langchain/community/vectorstores/chroma';
import { OllamaEmbeddings } from '@langchain/ollama';
import { Document } from '@langchain/core/documents';

@Injectable()
export class ChromaService {
  private vectorStore: Chroma | null = null;

  async init() {
    if (!this.vectorStore) {
      this.vectorStore = await Chroma.fromTexts(
        ["Hello world"], // bootstrap with something
        [{ id: "init" }],
        new OllamaEmbeddings({
          model: "llama3",//"nomic-embed-text", // make sure it's pulled into Ollama
          baseUrl: process.env.OLLAMA_URL || "http://localhost:11434",
        }),
        {
          collectionName: "documents",
          url: process.env.CHROMA_URL || "http://localhost:8000",
        }
      );
    }
    return this.vectorStore;
  }

  async addDocuments(docs: Document[]) {
    const store = await this.init();
    await store.addDocuments(docs);
  }

  async query(query: string, k = 3) {
    const store = await this.init();
    return await store.similaritySearch(query, k);
  }
}

