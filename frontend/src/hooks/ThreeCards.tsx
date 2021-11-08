import { useEffect, useState } from 'react';
import { Fetchproductindex } from 'apis/Product';
import { Product } from 'model/index';
import { useHistory } from 'react-router-dom';

const useThreeCards = (): Product[] => {
  const [state, setState] = useState<Product[]>([]);
  const history = useHistory();

  useEffect(() => {
    const API = async () => {
      try {
        const response = await Fetchproductindex();
        setState(() => response.products);
      } catch (e) {
        history.push('/', { message: 'エラーが発生しました。', type: 'error' });
      }
    };
    void API();
  }, [history]);

  return state;
};

export default useThreeCards;
