import { Module } from '@nestjs/common';import {Csrf} from "ncsrf";
import { ClassesService } from './classes.service';
import { ClassesController } from './classes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { UsersModule } from 'src/users/users.module';
import { Class, ClassSchema } from './entities/class.entity';
import { SubjectsModule } from 'src/subjects/subjects.module';

@Module({
  imports: [MongooseModule.forFeature([{name: Class.name, schema: ClassSchema}]), UsersModule, SubjectsModule],
  controllers: [ClassesController],
  providers: [ClassesService],
  exports: [ClassesService]
})
export class ClassesModule {}
