import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from "@nestjs/typeorm";
export class TypeOrmConfigService implements TypeOrmOptionsFactory{
    
    constructor(private readonly config:ConfigService) {};

    public createTypeOrmOptions(): TypeOrmModuleOptions {
        return {
            host: this.config.get<string>("HOST"),
            port: this.config.get<number>("DB_PORT"),
            username: this.config.get<string>("USERNAME"),
            password: this.config.get<string>("PASSWORD"),
            database: this.config.get<string>("DB_NAME"),
            synchronize: false,
            logging: true,
            type:"mysql",
            entities: [
                __dirname + "./../entities/*.entity*{.js, .ts}"
            ],
            migrations: [
                "./migrations/*{.ts,.js",
            ],
        };
    };
};