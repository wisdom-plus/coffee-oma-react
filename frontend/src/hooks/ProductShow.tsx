import { Fetchproductshow } from 'apis/Product';
import { Product } from 'model/index';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const useProductShow = (): { product: Product } => {
  const { id } = useParams<{ id: string }>();
  const { data: item = { product: {} as Product } } = useQuery(
    [id, 'product'],
    () => Fetchproductshow(id),
  );

  return item;
};

export default useProductShow;
