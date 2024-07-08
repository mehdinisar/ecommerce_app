export interface Order {
  id: number;
  userId: number;
  products: OrderedProduct[];
  orderDate: string;
  status: 'pending' | 'shipped' | 'delivered';
}

export interface OrderedProduct {
  productId: number;
  quantity: number;
}
