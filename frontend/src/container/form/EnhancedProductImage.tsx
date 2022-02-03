import { FC } from 'react';
import useProductImage from 'hooks/form/ProductImage';
import ProductImage from 'components/atoms/ProductImage';
/* eslint-disable react/jsx-props-no-spreading */

type Props = {
  file: Blob | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
};

const EnhancedProductImage: FC<Props> = ({ file, onChange }) => {
  const methods = useProductImage({ file });

  return <ProductImage onChange={onChange} {...methods} />;
};

export default EnhancedProductImage;
