import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  let port: number = process.env.PORT ? parseInt(process.env.PORT) : 3000;
  await app.listen(port);
  console.log(`🚀 Backend running on http://localhost:${port}`);

}
bootstrap();
