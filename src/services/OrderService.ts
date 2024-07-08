import axios from 'axios';
import { Product } from '../interfaces/product';
import { ErrorHandler } from '../utils/ErrorHandler';

const API_URL = 'https://fakestoreapi.com';

export class OrderService {
  async checkout(products: Product[], userId: number): Promise<string> {
    try {
      // Simulate order processing logic (not real checkout implementation)
      const orderDetails = {
        products: products.map(product => ({
          productId: product.id,
          quantity: 1, // Assuming each product is ordered once for simplicity
        })),
        userId: userId,
      };

      // Example of POST request to Fake Store API to create an order
      const response = await axios.post(`${API_URL}/orders`, orderDetails);
      return `Order placed successfully! Order ID: ${response.data.id}`;
    } catch (error) {
      console.error('Error during checkout:', error);
      throw new ErrorHandler('Error during checkout process.');
    }
  }
}
