import axios from 'axios';
import { Product } from '../interfaces/product';

const API_URL = 'https://fakestoreapi.com';

export class ProductService {
  async getAllProducts(): Promise<Product[]> {
    try {
      const response = await axios.get<Product[]>(`${API_URL}/products`);
      return response.data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  }

  async getProductById(id: number): Promise<Product | null> {
    try {
      const response = await axios.get<Product>(`${API_URL}/products/${id}`);
      return response.data;
    } catch (error) {
      console.error(`Error fetching product with ID ${id}:`, error);
      throw error;
    }
  }
}
