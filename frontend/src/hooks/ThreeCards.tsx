import { useEffect, useState } from 'react';
import { Fetchproductindex } from 'apis/Product';
import { Product } from 'model/index';
import { useHistory } from 'react-router-dom';

const useThreeCards = (): Product[] => {
  const [state, setState] = useState<Product[]>([]);
  const history = useHistory();

  useEffect(() => {
    Fetchproductindex()
      .then((result) =>
        result !== undefined && result.products !== undefined
          ? setState(() => result.products)
          : history.push('/products', {
              message: 'エラーが発生しました。',
              type: 'error',
            }),
      )
      .catch(() =>
        history.push('/products', {
          message: 'エラーが発生しました。',
          type: 'error',
        }),
      );
  }, [history]);

  return state;
};

export default useThreeCards;
