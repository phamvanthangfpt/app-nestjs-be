import { Injectable } from '@nestjs/common';
import { Courses, CoursesDocument } from 'src/schemas/courses.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { CreateCourseDto } from 'src/dto/create-course.dto';

@Injectable()
export class CoursesService {
  constructor(
    @InjectModel(Courses.name)
    private readonly coursesModel: Model<CoursesDocument>,
  ) {}

  async getCourses(): Promise<Courses[]> {
    return this.coursesModel.find().exec();
  }

  async getCourse(id: string): Promise<Courses> {
    return this.coursesModel.findOne({ _id: id }).exec();
  }

  async addCourse(createCourseDto: CreateCourseDto): Promise<Courses> {
    await this.coursesModel.create(createCourseDto);
    const allCourses: any = await this.coursesModel.find().exec();
    return allCourses;
  }

  async deleteCourse(id: string) {
    await this.coursesModel.findByIdAndRemove({ _id: id }).exec();
    const allCourses: any = await this.coursesModel.find().exec();
    return allCourses;
  }
}
