import { Controller, Get } from "@nestjs/common";

@Controller("students") // '/students'
export class StudentController {
    @Get()
    getStudents() {
        return "All Students";
    }
}
