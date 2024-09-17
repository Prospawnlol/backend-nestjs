import { Injectable } from '@nestjs/common';
import { FirebirdService } from '../firebird/firebird.service';

@Injectable()
export class UserService {
  constructor(private readonly firebirdService: FirebirdService) {}

  // Método para crear un nuevo usuario
  async createUser(username: string, email: string, user_password: string) {
    try {
      // Consulta SQL para insertar un nuevo usuario
      const query = `INSERT INTO users (username, email, user_password) VALUES (?, ?, ?)`;
      await this.firebirdService.executeQuery(query, [username, email, user_password]);
      return { success: true };
    } catch (error) {
      console.error('Error al crear el usuario:', error.message);
      throw new Error(`Error al crear el usuario: ${error.message}`);
    }
  }

  // Método para obtener todos los usuarios
  async getUsers() {
    try {
      const query = `SELECT * FROM users`;
      const users = await this.firebirdService.executeQuery(query);
      return users;
    } catch (error) {
      console.error('Error al obtener los usuarios:', error.message);
      throw new Error(`Error al obtener los usuarios: ${error.message}`);
    }
  }

  // Método para obtener un usuario por su ID
  async getUserById(id: number) {
    try {
      const query = `SELECT * FROM users WHERE id = ?`;
      const users = await this.firebirdService.executeQuery(query, [id]);
      if (users.length === 0) {
        throw new Error('Usuario no encontrado');
      }
      return users[0];
    } catch (error) {
      console.error('Error al obtener el usuario:', error.message);
      throw new Error(`Error al obtener el usuario: ${error.message}`);
    }
  }

  // Método para actualizar un usuario
  async updateUser(id: number, username: string, email: string, user_password: string) {
    try {
      const query = `UPDATE users SET username = ?, email = ?, user_password = ? WHERE id = ?`;
      await this.firebirdService.executeQuery(query, [username, email, user_password, id]);
      return { success: true };
    } catch (error) {
      console.error('Error al actualizar el usuario:', error.message);
      throw new Error(`Error al actualizar el usuario: ${error.message}`);
    }
  }

  // Método para eliminar un usuario
  async deleteUser(id: number) {
    try {
      const query = `DELETE FROM users WHERE id = ?`;
      await this.firebirdService.executeQuery(query, [id]);
      return { success: true };
    } catch (error) {
      console.error('Error al eliminar el usuario:', error.message);
      throw new Error(`Error al eliminar el usuario: ${error.message}`);
    }
  }
}
