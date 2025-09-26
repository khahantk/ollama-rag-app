import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/app.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RagModule } from './rag/rag.module';
import { ChromaModule } from './chroma/chroma.module';
import { OllamaModule } from './ollama/ollama.module';

@Module({
  imports: [ConfigModule.forRoot({
    load: [configuration],
    isGlobal: true,
  }), ChromaModule, OllamaModule, RagModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
