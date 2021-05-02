import { FC, useReducer, useEffect } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import ShowTop from 'components/organisms/ShowTop';
import { Fetchproductshow } from 'apis/product';
import { productindexReducer, initialState } from 'reducers/Product';
import { ProductsActionTypes } from '../../constants';

const Productshow: FC<{ productId: number }> = ({ productId }) => {
  const [state, dispatch] = useReducer(productindexReducer, initialState);

  useEffect(() => {
    dispatch({ type: ProductsActionTypes.FETCHING });
    Fetchproductshow(productId)
      .then((data) =>
        dispatch({
          type: ProductsActionTypes.FETCH_SUCCESS,
          payload: data,
        }),
      )
      .catch(() => dispatch({ type: ProductsActionTypes.ERROR }));
  }, []);

  return (
    <>
      <Header
        as="h1"
        content="アイテム詳細"
        textAlign="center"
        style={{ marginBottom: '1rem' }}
      />
      <Segment>
        <ShowTop product={state.productsList} />
      </Segment>
    </>
  );
};

export default Productshow;
