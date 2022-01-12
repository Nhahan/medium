import { Controller, Get, Post, Put, Param, Body } from "@nestjs/common";
import {
    CreateStudentDto,
    FindStudentsResponseDto,
    UpdateStudentDto,
    StudentResponseDto,
} from "./dto/student.dto";
import { StudentService } from "./student.service";

@Controller("students") // '/students'
export class StudentController {
    constructor(private readonly studentService: StudentService) {}

    @Get()
    getStudent(): FindStudentsResponseDto[] {
        return this.studentService.getStudents();
    }

    @Get("/:studentId")
    getStudentById(
        @Param("studentId") studentId: string,
    ): FindStudentsResponseDto {
        return this.studentService.getStudentById(studentId);
    }

    @Post()
    createStudent(@Body() body: CreateStudentDto) {
        return this.studentService.createStudent(body);
    }

    @Put("/:studentId")
    updateStudent(
        @Param("studentId") studentId: string,
        @Body() body: UpdateStudentDto,
    ) {
        return this.studentService.updateStudent(body, studentId);
    }
}
