import { FC } from 'react';
import { Product } from 'model/index';
import TenTableColumn from 'components/molecules/TenTableColumn';
import { useRecoilValue } from 'recoil';
import LoginState from 'Atom';

const EnhancedTenTableColumn: FC<{ product: Product }> = ({ product }) => {
  const user = useRecoilValue(LoginState);

  return <TenTableColumn product={product} user={user} />;
};

export default EnhancedTenTableColumn;
