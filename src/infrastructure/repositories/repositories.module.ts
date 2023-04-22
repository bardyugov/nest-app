import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { config } from "../config/typeorm/typeorm.config";
import { UserEntity } from "../entities/user.entity";
import { UserRepository } from "./user-repository/user.repository";

@Module({
    imports:[
        TypeOrmModule.forRoot(config),
        TypeOrmModule.forFeature([UserEntity])
    ],
    providers:[
        UserRepository
    ],
    exports:[
        UserRepository
    ]
})
export class RepositoryModule { };