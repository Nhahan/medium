import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import { CreateStudentDto, UpdateStudentDto } from "./dto/student.dto";

@Controller("students") // '/students'
export class StudentController {
    @Get()
    getStudents() {
        return "All Students";
    }

    @Get("/:studentId")
    getStudentById(@Param("studentId") studentId: string) {
        return `Get Student With Id of ${studentId}`;
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto) {
        return `Create Student With The Following Data ${JSON.stringify(body)}`;
    }

    @Put("/:studentId")
    updateStudent(
        @Param("studentId") studentId: string,
        @Body() body: UpdateStudentDto,
    ) {
        return `Update Student With The Following Data ${JSON.stringify(
            body,
        )} and ${studentId}`;
    }
}
