import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';
import { CoursesModule } from './courses/courses.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://pvthang4:zh2n3zuK9eanGYSO@cluster0.ytehd2z.mongodb.net/app-nestjs?retryWrites=true&w=majority',
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    CatsModule,
    CoursesModule,
  ],
})
export class AppModule {}
