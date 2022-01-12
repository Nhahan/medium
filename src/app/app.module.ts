import { Module } from "@nestjs/common";
import { StudentModule } from "../student/student.module";

//root of the application
@Module({
    imports: [StudentModule],
})
export class AppModule {}
