import { FC } from 'react';
import useProductShow from 'hooks/ProductShow';
import ProductShow from 'components/templates/ProductShow';

const EnhancedProductShow: FC = () => {
  const state = useProductShow();

  return <ProductShow product={state.product} />;
};
export default EnhancedProductShow;
