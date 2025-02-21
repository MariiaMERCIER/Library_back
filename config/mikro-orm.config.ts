import { defineConfig } from '@mikro-orm/core';
import { Migrator } from '@mikro-orm/migrations';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { SeedManager } from '@mikro-orm/seeder';
import { config } from 'dotenv-flow';

config({
  purge_dotenv: true,
  silent: true,
});

export default defineConfig({
  entities: [`${__dirname}/../src/**/*.{entity,embeddable}.{js,ts}`],
  dbName: process.env.MYSQL_DATABASE,
  clientUrl: process.env.DATABASE_URL,
  debug: process.env.NODE_ENV === 'development',
  metadataProvider: TsMorphMetadataProvider,
  extensions: [Migrator, SeedManager],
  autoJoinRefsForFilters: false,
  ignoreUndefinedInQuery: true,
  loadStrategy: 'joined',
  discovery: {
    warnWhenNoEntities: false,
    requireEntitiesArray: false,
  },
  seeder: {
    path: `${__dirname}/../database/seeders`,
    defaultSeeder: 'DatabaseSeeder',
    glob: '!(*.d).{js,ts}',
    emit: 'ts',
    fileName: (className: string) => className,
  },
  migrations: {
    path: `${__dirname}/../database/migrations`,
    snapshot: false,
  },
});
