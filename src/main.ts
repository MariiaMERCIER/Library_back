import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'reflect-metadata';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService: ConfigService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));
  const port = configService.get('app_port') ?? 3000;
  await app.listen(process.env.PORT ?? 3000);

  console.log('====================================');
  console.log(`Application is running on: http://127.0.0.1:${port}`);
  console.log('====================================');
}
bootstrap();
