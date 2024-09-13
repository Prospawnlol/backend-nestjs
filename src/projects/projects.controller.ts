// src/projects/projects.controller.ts

import { Controller, Get } from '@nestjs/common';

@Controller('projects')  // Define la ruta base /projects
export class ProjectsController {
  @Get()  // Maneja la petición GET en /projects
  getProjects() {
    return { name: 'Pablo Mosquera', profileImage: 'https://robohash.org/20da7dfce73507171987385b94d8a99a?set=set2&bgset=bg1&size=400x400' };
  }
}
