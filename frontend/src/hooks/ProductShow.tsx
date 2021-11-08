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
    const API = async () => {
      try {
        const response = await Fetchproductshow(id);
        setState(() => response);
      } catch (e) {
        history.push('/products', {
          message: 'エラーが発生しました。',
          type: 'error',
        });
      }
    };
    void API();
  }, [id, history]);

  return state;
};

export default useProductShow;
