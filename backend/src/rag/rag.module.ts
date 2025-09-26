import { Module } from '@nestjs/common';
import { RagService } from './rag.service';
import { RagController } from './rag.controller';
import { ChromaModule } from "../chroma/chroma.module";
import { OllamaModule } from "../ollama/ollama.module";
import { ChromaService } from "../chroma/chroma.service";
import { OllamaService } from "../ollama/ollama.service";

@Module({
  imports: [ChromaModule, OllamaModule],
  providers: [RagService, ChromaService, OllamaService],
  controllers: [RagController]
})
export class RagModule {}
