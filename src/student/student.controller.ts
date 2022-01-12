import { Controller, Get, Post, Put, Param } from "@nestjs/common";

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
    createStudent() {
        return "Create Student";
    }

    @Put("/:studentId")
    updateStudent() {
        return "Update Student By Id";
    }
}
