import { Module } from '@nestjs/common';
import { RagService } from './rag.service';
import { RagController } from './rag.controller';
import { ChromaModule } from "../chroma/chroma.module";
import { OllamaModule } from "../ollama/ollama.module";

@Module({
  imports: [ChromaModule, OllamaModule],
  providers: [RagService],
  controllers: [RagController]
})
export class RagModule {}
