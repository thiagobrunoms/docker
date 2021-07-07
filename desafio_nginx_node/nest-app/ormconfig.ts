import { ConnectionOptions } from 'typeorm';
import { join } from 'path';

const configuration: ConnectionOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: 5432, 
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [join(__dirname, "**", '*.entity.{ts,js}')],
  synchronize: true, //process.env.TYPEORM_SYNC || dbConfig.synchronize,
  migrationsRun: false,
  dropSchema: false,
  logging: false,
  logger: 'advanced-console',
  // migrations: [join(__dirname, '/src/database/migrations/**/*{.ts,.js}')],
  cli: {
    migrationsDir: 'src/database/migrations',
  },
};

export = configuration;
