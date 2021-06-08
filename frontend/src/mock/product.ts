import image1 from 'images/product-01.jpg';
import image2 from 'images/product-02.jpg';
import image3 from 'images/product-03.jpg';
import { Product } from 'model/index';

export const products: Product[] = [
  {
    id: 1,
    name: 'コーヒー器具の名前1',
    image: { url: image1 },
    shopname: 'コーヒーのショップの名前1',
    price: 100,
    url: 'http://www.example.com/1',
    caption: 'アイテムの説明が入ります。1',
    likes_count: 1,
  },
  {
    id: 2,
    name: 'コーヒー器具の名前2',
    image: { url: image2 },
    shopname: 'コーヒーのショップの名前2',
    price: 200,
    url: 'http://www.example.com/2',
    caption: 'アイテムの説明が入ります。2',
    likes_count: 2,
  },
  {
    id: 3,
    name: 'コーヒー器具の名前3',
    image: { url: image3 },
    shopname: 'コーヒーのショップの名前3',
    price: 300,
    url: 'http://www.example.com/3',
    caption: 'アイテムの説明が入ります。3',
    likes_count: 3,
  },
];

export default products;
