import { FC } from 'react';
import ProductShow from 'components/templates/ProductShow';
import useProductShow from 'hooks/ProductShow';

const EnhancedProductShow: FC = () => {
  const state = useProductShow();

  return <ProductShow product={state.product} />;
};
export default EnhancedProductShow;
