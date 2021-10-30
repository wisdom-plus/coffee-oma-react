import { FC, useState, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import ShowTop from 'components/organisms/ShowTop';
import { Fetchproductshow } from 'apis/Product';
import { Product } from 'model/index';
import { useParams, useHistory } from 'react-router-dom';

const ProductShow: FC = () => {
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

  return (
    <>
      <Header
        as="h1"
        content="アイテム詳細"
        textAlign="center"
        style={{ marginBottom: '1rem' }}
      />
      <ShowTop product={state.product} />
    </>
  );
};
export default ProductShow;
