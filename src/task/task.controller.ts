import { Controller, Get } from '@nestjs/common';

@Controller('task')
export class TaskController {
    @Get('polizas')
    getData(){
        return {message:'Hello from NestJS'};
    }
}

