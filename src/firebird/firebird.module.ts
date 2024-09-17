import { Module } from '@nestjs/common';
import { FirebirdService } from './firebird.service';

@Module({
  providers: [FirebirdService],
  exports: [FirebirdService],  // Asegúrate de exportarlo para que otros módulos puedan usarlo
})
export class FirebirdModule {}
