import { Injectable } from '@nestjs/common';
import * as Firebird from 'node-firebird';

@Injectable()
export class FirebirdService {
  private options = {
    host: 'localhost',
    port: 3050,
    database: 'C:/Users/User/Documents/db/pruebadb/DEMO1.GDB',
    user: 'SYSDBA',
    password: 'masterkey',
  };

  async executeQuery(query: string, params: any[] = []): Promise<any> {
    return new Promise((resolve, reject) => {
      Firebird.attach(this.options, (err: Error | null, db: any) => {
        if (err) {
          console.error('Error al conectar con Firebird:', err.message);
          return reject(err);
        }
        db.query(query, params, (err: Error | null, result: any) => {
          if (err) {
            console.error('Error al ejecutar la consulta SQL:', err.message);
            return reject(err);
          }
          db.detach();
          resolve(result);
        });
      });
    });
  }
}