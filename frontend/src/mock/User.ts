import Icon1 from 'images/icon-1.png';
import Icon2 from 'images/icon-2.png';

export const currentuser = {
  id: 1,
  name: 'test',
  email: 'test@example.com',
  icon: { url: Icon1 },
  profile: 'ユーザーのプロフィール',
  created_at: new Date(),
};

export const Users = [
  {
    id: 1,
    name: 'test',
    email: 'test@example.com',
    icon: { url: Icon1 },
    profile: 'ユーザーのプロフィール',
    created_at: new Date(),
  },
  {
    id: 2,
    name: 'test2',
    email: 'test2@example.com',
    icon: { url: Icon2 },
    profile: 'ユーザーのプロフィール2',
    created_at: new Date(),
  },
];
