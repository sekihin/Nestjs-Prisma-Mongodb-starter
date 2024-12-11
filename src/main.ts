import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api');

  app.enableCors();

  const config = new DocumentBuilder()
    .setTitle('Northwind example')
    .setDescription('The Northwind API description')
    .setVersion('1.0')
    .addTag('Northwind')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(4000);
}

bootstrap();
