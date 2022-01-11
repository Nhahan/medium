import { Module } from "@nestjs/common";
import { StudentController } from "../student/student.controller";

//root of the application
@Module({
    imports: [],
    controllers: [StudentController],
})
export class AppModule {}
