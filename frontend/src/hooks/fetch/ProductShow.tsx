import { Fetchproductshow } from 'apis/Product';
import { Product } from 'model/index';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const useProductShow = (): { product: Product } => {
  const { id } = useParams() as { id: string };
  const { data: item = { product: {} as Product } } = useQuery(
    [id, 'product'],
    () => Fetchproductshow(id),
    { notifyOnChangeProps: 'tracked' },
  );

  return item;
};

export default useProductShow;
