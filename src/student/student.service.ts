import { Injectable } from "@nestjs/common";
import { students } from "../db";
import { v4 as uuid } from "uuid";
import {
    CreateStudentDto,
    FindStudentsResponseDto,
    StudentResponseDto,
    UpdateStudentDto,
} from "./dto/student.dto";
@Injectable()
export class StudentService {
    private students = students;

    getStudents(): FindStudentsResponseDto[] {
        return this.students;
    }

    getStudentById(studentId: string): FindStudentsResponseDto {
        return this.students.find((student) => {
            return student.id === studentId;
        });
    }

    createStudent(payload: CreateStudentDto) {
        // payload is a body
        const newStudent = {
            id: uuid(),
            ...payload,
        };

        this.students.push(newStudent);
    }

    updateStudent(payload: UpdateStudentDto, studentId: string) {
        let updatedStudent: StudentResponseDto;

        const updatedStudentList = this.students.map((student) => {
            if (student.id === studentId) {
                updatedStudent = {
                    id: studentId,
                    ...payload,
                };
            } else return student;

            this.students = updatedStudentList;

            return updatedStudent;
        });
    }
}
