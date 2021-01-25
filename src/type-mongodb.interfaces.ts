import { ModuleMetadata, Type } from '@nestjs/common/interfaces';
import { DocumentManagerOptions } from 'type-mongodb';

export type TypeMongoDBModuleOptions = Omit<
  DocumentManagerOptions,
  'documents'
>;

export interface TypeMongoDBOptionsFactory {
  createTypeMongoDBOptions():
    | Promise<Omit<TypeMongoDBModuleOptions, 'name'>>
    | Omit<TypeMongoDBModuleOptions, 'name'>;
}

export interface TypeMongoDBModuleAsyncOptions
  extends Pick<ModuleMetadata, 'imports' | 'providers'> {
  useExisting?: Type<TypeMongoDBOptionsFactory>;
  useClass?: Type<TypeMongoDBOptionsFactory>;
  useFactory?: (
    ...args: any[]
  ) => Promise<TypeMongoDBModuleOptions> | TypeMongoDBModuleOptions;
  inject?: any[];
}
