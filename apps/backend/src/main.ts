import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModule,
} from 'nest-winston';
import * as winston from 'winston';
import * as cookieParser from 'cookie-parser';

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

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: bootstrapLogger(),
  });
  app.use(cookieParser());
  app.setGlobalPrefix(API_PREFIX);
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
