import { Review } from 'model/index';

export const reviews: Review[] = [
  {
    id: 1,
    title: 'レビューのタイトル１',
    content: 'レビューの内容１',
    rate: 5,
    user_id: 1,
    time_ago: new Date(),
  },
  {
    id: 2,
    title: 'レビューのタイトル2',
    content: 'レビューの内容2',
    rate: 4,
    user_id: 2,
    time_ago: new Date(),
  },
];

export default reviews;
