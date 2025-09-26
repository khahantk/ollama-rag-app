import { Module } from '@nestjs/common';
import { ChromaService } from './chroma.service';

@Module({
  providers: [ChromaService]
})
export class ChromaModule {}
