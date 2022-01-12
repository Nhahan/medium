import { Controller, Get, Post, Put, Param, body, Body } from "@nestjs/common";

@Controller("students") // '/students'
export class StudentController {
    @Get()
    getStudents() {
        return "All Students";
    }

    @Get("/:studentId")
    getStudentById(@Param() studentId: string) {
        return `Get Student With Id of ${studentId}"`;
    }

    @Post()
    createStudent(@Body() body) {
        return `Create Student With The Following Data ${JSON.stringify(body)}`;
    }

    @Put("/:studentId")
    updateStudent() {
        return "Update Student By Id";
    }
}
