import { FC, useEffect, useReducer } from 'react';
import { Card, Button, Icon } from 'semantic-ui-react';
import Ranking from 'components/atoms/Ranking';
import { Fetchproductindex } from 'apis/Product';
import { productindexReducer } from 'reducers/Product';
import { Link } from 'react-router-dom';
import { products } from 'mock/product';
import REQUEST_STATE, { ProductsActionTypes } from '../../constants';

const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  productsList: products,
};

const RankThreeCards: FC = () => {
  const [state, dispatch] = useReducer(productindexReducer, initialState);

  useEffect(() => {
    dispatch({ type: ProductsActionTypes.FETCHING });
    Fetchproductindex()
      .then((data) =>
        dispatch({
          type: ProductsActionTypes.FETCH_SUCCESS,
          payload: data,
        }),
      )
      .catch(() => dispatch({ type: ProductsActionTypes.ERROR }));
  }, []);

  return (
    <Card.Group
      itemsPerRow={3}
      stackable
      centered
      style={{ paddingTop: '3em' }}
    >
      <Ranking rankings={state.productsList} />
      <Link to="/product/ranking">
        <Button color="teal" size="huge" style={{ marginTop: '2em' }}>
          <Icon name="signal" />
          ランキングを詳しく見る
        </Button>
      </Link>
    </Card.Group>
  );
};

export default RankThreeCards;
