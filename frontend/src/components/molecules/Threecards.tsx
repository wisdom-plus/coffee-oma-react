import { FC, useEffect, useReducer } from 'react';
import { Card, Segment, Button, Icon } from 'semantic-ui-react';
import Ranking from 'components/atoms/Ranking';
import Indexcards from 'components/atoms/Indexcards';
import { Fetchproductindex } from 'apis/Product';
import { productindexReducer, initialState } from 'reducers/Product';
import { Link } from 'react-router-dom';
import { ProductsActionTypes } from '../../constants';

const rankings = [
  {
    id: 1,
    imageurl: 's',
    itemname: 's',
    meta: 's',
    shopname: 's',
    likescount: 1,
  },
  {
    id: 2,
    imageurl: 'a',
    itemname: 'a',
    meta: 'a',
    shopname: 'a',
    likescount: 2,
  },
  {
    id: 3,
    imageurl: 'y',
    itemname: 'y',
    meta: 'y',
    shopname: 'y',
    likescount: 3,
  },
];
type Props = {
  isindex?: boolean;
  className?: string;
};

export const Threecards: FC<Props> = ({ isindex = false, className }) => {
  const [state, dispatch] = useReducer(productindexReducer, initialState);

  useEffect(() => {
    if (isindex) {
      dispatch({ type: ProductsActionTypes.FETCHING });
      Fetchproductindex()
        .then((data) =>
          dispatch({
            type: ProductsActionTypes.FETCH_SUCCESS,
            payload: data,
          }),
        )
        .catch(() => dispatch({ type: ProductsActionTypes.ERROR }));
    }
  }, [isindex]);

  return (
    <>
      {isindex ? (
        <Segment
          loading={state.fetchState === 'LOADING'}
          style={{ margin: '4em', padding: '3em' }}
        >
          <Card.Group itemsPerRow={3} stackable className={className} centered>
            <Indexcards products={state.productsList} />
          </Card.Group>
        </Segment>
      ) : (
        <Card.Group
          itemsPerRow={3}
          stackable
          centered
          style={{ paddingTop: '3em' }}
        >
          <Ranking rankings={rankings} />
          <Link to="/product/ranking">
            <Button color="teal" size="huge" style={{ marginTop: '2em' }}>
              <Icon name="signal" />
              ランキングを詳しく見る
            </Button>
          </Link>
        </Card.Group>
      )}
    </>
  );
};

export default Threecards;
