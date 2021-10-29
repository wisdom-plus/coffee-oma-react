import { FC } from 'react';
import Footercolumn from 'components/molecules/Footercolumn';

const List = [
  {
    id: 1,
    content: 'トップページ',
    url: '/',
  },
  {
    id: 2,
    content: 'プライベートポリシー',
    url: '/private_policy',
  },
  {
    id: 3,
    content: '利用規約',
    url: 'policy',
  },
  {
    id: 4,
    content: 'お問い合わせ',
    url: '/contact/new',
  },
];

const List2 = [
  {
    id: 1,
    content: 'アイテムの一覧を見る',
    url: '/products',
  },
  {
    id: 2,
    content: 'アイテムを登録する',
    url: '/product/new',
  },
];

const EnhancedFootercolumn: FC = () => (
  <Footercolumn List={List} List2={List2} />
);

export default EnhancedFootercolumn;
