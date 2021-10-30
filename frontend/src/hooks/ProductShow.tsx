import { useState, useEffect } from 'react';
import { Fetchproductshow } from 'apis/Product';
import { Product } from 'model/index';
import { useParams, useHistory } from 'react-router-dom';

const useProductShow = (): { product: Product } => {
  const [state, setState] = useState<{ product: Product }>(
    {} as { product: Product },
  );
  const { id } = useParams<{ id: string }>();
  const history = useHistory();

  useEffect(() => {
    Fetchproductshow(id)
      .then((result) =>
        result !== undefined && result.product !== undefined
          ? setState(() => result)
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
  }, [id, history]);

  return state;
};

export default useProductShow;
