import { Controller, Get, Put } from "@nestjs/common";

@Controller("teacher/:teacherId/students")
export class StudentTeacherController {
    @Get()
    getStudents() {
        return "Get All Students That Belong To A Teacher";
    }

    @Put("/:teacherId/students/:studentId")
    updateStudentTeacher() {
        return "Update Student Teacher";
    }
}
