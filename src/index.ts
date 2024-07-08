import { ProductService } from './services/ProductService';
import { Log } from './decorators/Log';
import { ErrorHandler } from './utils/ErrorHandler';

async function main() {
  const productService = new ProductService();

  try {
    const products = await productService.getAllProducts();
    const get_product_id = await productService.getProductById(1);
    console.log('single product' , get_product_id);
    console.log('Products:', products);
  } catch (error) {
    console.error('Error occurred:', error);
    if (error instanceof ErrorHandler) {
      console.error('Custom error handler:', error.message);
    }
  }
}

main();
