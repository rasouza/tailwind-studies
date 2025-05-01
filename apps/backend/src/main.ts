import { INestApplication } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { contracts } from '@repo/api-contracts';
import { generateOpenApi } from '@ts-rest/open-api';
import * as cookieParser from 'cookie-parser';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';

import { AppModule } from './app.module';

const API_PREFIX = 'api';

function bootstrapLogger() {
  const instance = WinstonModule.createLogger({
    transports: [
      new winston.transports.Console({
        format: winston.format.combine(
          winston.format.timestamp(),
          winston.format.ms(),
          nestWinstonModuleUtilities.format.nestLike('Streaming Subs', {
            colors: true,
            prettyPrint: true,
          }),
        ),
      }),
    ],
  });

  return instance;
}

function bootstraopOpenApi(app: INestApplication) {
  const document = generateOpenApi(contracts, {
    info: {
      title: 'Backend API',
      version: '1.0.0',
    },
  });

  SwaggerModule.setup('docs', app, document);
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: bootstrapLogger(),
    cors: true,
  });
  app.use(cookieParser());
  app.setGlobalPrefix(API_PREFIX);

  bootstraopOpenApi(app);

  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
