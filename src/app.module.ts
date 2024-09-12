import { Module } from '@nestjs/common';
import { TasksModule } from './task/task.module';
import { ProjectsModule } from './projects/projects.module';

@Module({
  imports: [TasksModule, ProjectsModule],
})
export class AppModule {}
