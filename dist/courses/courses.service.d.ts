import { Courses, CoursesDocument } from 'src/schemas/courses.schema';
import { Model } from 'mongoose';
import { CreateCourseDto } from 'src/dto/create-course.dto';
export declare class CoursesService {
    private readonly coursesModel;
    constructor(coursesModel: Model<CoursesDocument>);
    getCourses(): Promise<Courses[]>;
    getCourse(id: string): Promise<Courses>;
    addCourse(createCourseDto: CreateCourseDto): Promise<Courses>;
    deleteCourse(id: string): Promise<any>;
}
