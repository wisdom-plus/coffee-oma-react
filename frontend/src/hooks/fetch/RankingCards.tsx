import { FetchLikeIndex } from 'apis/Product';
import { Product } from 'model/index';
import { useQuery } from 'react-query';

const useRankingCards = (): Product[] => {
  const { data: products = [] } = useQuery(
    ['ranking'],
    () => FetchLikeIndex(),
    { notifyOnChangeProps: 'tracked' },
  );

  return products;
};

export default useRankingCards;
