import { Fetchproductindex } from 'apis/Product';
import { Product } from 'model/index';
import { useQuery } from 'react-query';

const useThreeCards = (): Product[] => {
  const { data: products = [] } = useQuery(['products'], () =>
    Fetchproductindex(),
  );

  return products;
};

export default useThreeCards;
