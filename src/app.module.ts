import { Module } from '@nestjs/common';
import { TasksModule } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';
import { UserModule } from './user/user.module';

@Module({
  imports: [TasksModule, ProjectsModule, UserModule],
  providers:[],
  controllers:[],
})
export class AppModule {}
