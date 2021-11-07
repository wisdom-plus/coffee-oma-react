import { useEffect, useState } from 'react';
import { FetchLikeIndex } from 'apis/Product';
import { Product } from 'model/index';

const useRankingCards = (): Product[] => {
  const [state, setState] = useState<Product[]>([]);
  useEffect(() => {
    FetchLikeIndex()
      .then((result) => (result !== 0 ? setState(result.likes) : []))
      .catch(() => setState([]));
  }, []);

  return state;
};

export default useRankingCards;
