export interface product {
  name: string;
  description: string;
  code: string;
  photo: string;
  stock: number;
}

export interface labeledProduct extends product {
  id: string;
  timestamp: string;
}
