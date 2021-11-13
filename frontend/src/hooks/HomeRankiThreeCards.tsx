import { FetchLikeIndex } from 'apis/Product';
import { Product } from 'model/index';
import { useQuery } from 'react-query';

const useHomeRanking = (): Product[] => {
  const { data: products = [] } = useQuery(['HomeRank'], () =>
    FetchLikeIndex(),
  );

  return products;
};

export default useHomeRanking;
