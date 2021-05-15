import { FC, useReducer, useEffect } from 'react';
import { Header } from 'semantic-ui-react';
import ShowTop from 'components/organisms/ShowTop';
import { Fetchproductshow } from 'apis/Product';
import { productshowReducer } from 'reducers/Product';
import { useParams } from 'react-router-dom';
import REQUEST_STATE, { ProductsActionTypes } from '../../constants';

const Product = {
  id: 1,
  name: 'name',
  price: 0,
  caption: 'caption',
  url: 'url',
  shopname: 'shopname',
  image: 'image',
};

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  productsList: Product,
};

const Productshow: FC = () => {
  const [state, dispatch] = useReducer(productshowReducer, initialState);
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    dispatch({ type: ProductsActionTypes.FETCHING });
    Fetchproductshow(id)
      .then((data) =>
        dispatch({
          type: ProductsActionTypes.FETCH_SUCCESS,
          payload: data,
        }),
      )
      .catch(() => dispatch({ type: ProductsActionTypes.ERROR }));
  }, [id]);

  return (
    <>
      <Header
        as="h1"
        content="アイテム詳細"
        textAlign="center"
        style={{ marginBottom: '1rem' }}
      />
      <ShowTop product={state.productsList} />
    </>
  );
};

export default Productshow;
