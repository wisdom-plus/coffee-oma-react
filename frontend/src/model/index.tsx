export type Product = {
  id: number;
  name: string;
  price: number;
  caption: string;
  url: string;
  shopname: string;
  image: string;
};

export type ProductInput = {
  name: string;
  price: number;
  caption: string;
  url: string;
  shopname: string;
};

export type PostOutput = {
  status: 'OK' | 'Failure';
};
export default Product;
