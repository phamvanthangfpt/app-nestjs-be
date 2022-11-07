import { CoursesService } from './courses.service';
import { CreateCourseDto } from '../dto/create-course.dto';
export declare class CoursesController {
    private coursesService;
    constructor(coursesService: CoursesService);
    getCourses(): Promise<import("../schemas/courses.schema").Courses[]>;
    getCourse(courseId: any): Promise<import("../schemas/courses.schema").Courses>;
    addCourse(createCourseDto: CreateCourseDto): Promise<import("../schemas/courses.schema").Courses>;
    deleteCourse(query: any): Promise<any>;
}
