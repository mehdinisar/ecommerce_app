import axios from 'axios';
import { User } from '../interfaces/User';
import { ErrorHandler } from '../utils/ErrorHandler';

const API_URL = 'https://fakestoreapi.com';

export class UserService {
  async getUserById(userId: number): Promise<User | null> {
    try {
      const response = await axios.get<User>(`${API_URL}/users/${userId}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching user with ID ${userId}:`, error);
      throw new ErrorHandler('Error fetching user.');
    }
  }

  async updateUser(userId: number, userData: Partial<User>): Promise<User | null> {
    try {
      const response = await axios.put<User>(`${API_URL}/users/${userId}`, userData);
      return response.data;
    } catch (error) {
      console.error(`Error updating user with ID ${userId}:`, error);
      throw new ErrorHandler('Error updating user.');
    }
  }
}
