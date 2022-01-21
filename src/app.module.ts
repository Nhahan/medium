import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { TagModule } from "./tag/tag.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import ormconfig from "./ormconfig";

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule], // forRoot: import from not our project but from library
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
