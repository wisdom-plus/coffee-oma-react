export type Product = {
  id: number;
  name: string;
  price: number;
  caption: string;
  url: string;
  shopname: string;
  image: { url: string };
  ['likes_count']: number;
};
export type Productdata = {
  id: number;
  name: string;
  price: number;
  caption: string;
  url: string;
  shopname: string;
};

export type ProductForm = Omit<Productdata, 'id'>;

export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
};

export type UserInput = {
  name: string;
  email: string;
  password: string;
  ['password_confirmation']: string;
};

export type UserEditForm = {
  icon: File;
  name: string;
  email: string;
  password?: string;
  ['password_confirmation']?: string;
  profile: string;
};
export type UserForm = Omit<User, 'id'>;

export type ResetPasswordEditdata = Omit<UserInput, 'id' | 'name' | 'email'>;

export type Session = Omit<User, 'id' | 'name'>;

export type Token = {
  'access-token': string;
  client: string;
  uid: string;
};

export type CurrentUser = {
  email: string;
  id: number;
  icon: { url: string };
  name: string;
  profile: string;
  ['created_at']: Date;
};

export type Review = {
  title: string;
  content: string;
  rate: number;
  id: number;
  ['time_ago']: Date;
};

export type ReviewFormData = Omit<Review, 'id' | 'time_ago'>;

export type FormInputType =
  | 'name'
  | 'email'
  | 'password'
  | 'password_confirmation'
  | 'current_password'
  | 'shopname'
  | 'price'
  | 'url'
  | 'caption'
  | 'profile'
  | 'title'
  | 'content'
  | 'rate';

export type LikedData = { count: number; liked: boolean };

export type ruletype = () =>
  | {
      required: string;
      minLength?: undefined;
    }
  | {
      required: string;
      minLength: {
        value: number;
        message: string;
      };
    }
  | {
      required?: undefined;
      minLength?: undefined;
    };

export default Product;
