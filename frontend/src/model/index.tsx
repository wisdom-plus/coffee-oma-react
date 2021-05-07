export type Product = {
  id: number;
  name: string;
  price: number;
  caption: string;
  url: string;
  shopname: string;
  image: string;
};

export type ProductForm = Omit<Product, 'id' | 'image'>;

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  passwordconfirmation: string;
};

export type UserForm = Omit<User, 'id'>;

export type PostOutput = {
  status: 'OK' | 'Failure';
};
export default Product;
