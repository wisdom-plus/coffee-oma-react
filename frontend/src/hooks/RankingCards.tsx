import { useEffect, useState } from 'react';
import { FetchLikeIndex } from 'apis/Product';
import { Product } from 'model/index';

const useRankingCards = (): Product[] => {
  const [state, setState] = useState<Product[]>([]);
  useEffect(() => {
    const API = async () => {
      try {
        const response = await FetchLikeIndex();
        setState(() => response.likes);
      } catch (e) {
        setState(() => []);
      }
    };
    void API();
  }, []);

  return state;
};

export default useRankingCards;
