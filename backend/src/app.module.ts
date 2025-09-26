import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RagModule } from './rag/rag.module';
import { ChromaModule } from './chroma/chroma.module';
import { OllamaModule } from './ollama/ollama.module';

@Module({
  imports: [ChromaModule, OllamaModule, RagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
