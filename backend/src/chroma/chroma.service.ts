import { Injectable } from '@nestjs/common';
import { Chroma } from '@langchain/community/vectorstores/chroma';
import { OllamaEmbeddings } from '@langchain/ollama';
import { Document } from '@langchain/core/documents';
import { ConfigService } from "@nestjs/config";

@Injectable()
export class ChromaService {
  private vectorStore: Chroma | null = null;
  constructor(private configService: ConfigService) {}
  async init() {
    if (!this.vectorStore) {
      this.vectorStore = await Chroma.fromTexts(
        ["Hello world"], // bootstrap with something
        [{ id: "init" }],
        new OllamaEmbeddings({
          model:  this.configService.get('OLLAMA_MODEL'), // or "nomic-embed-text", // make sure it's pulled into Ollama
          baseUrl: this.configService.get('OLLAMA_URL'),
        }),
        {
          collectionName: "documents",
          url: this.configService.get('CHROMA_URL'),
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

