import { FC, useEffect, useReducer } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Ranking from 'components/atoms/Ranking';
import Indexcards from 'components/atoms/Indexcards';
import { Fetchproductindex } from 'apis/Product';
import { productindexReducer, initialState } from 'reducers/Product';
import { ProductsActionTypes } from '../../constants';

const rankings = {
  id: 1,
  link: 's',
  imageurl: 's',
  itemname: 's',
  meta: 's',
  shopname: 's',
  likescount: 1,
};
type Props = {
  isindex?: boolean;
  className?: string;
};

export const Threecards: FC<Props> = ({ isindex = false, className }) => {
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
    <>
      {isindex ? (
        <Segment
          loading={state.fetchState === 'LOADING'}
          style={{ margin: '4em', padding: '3em' }}
        >
          <Card.Group itemPerRow={3} stackable className={className} centered>
            <Indexcards products={state.productsList} />
          </Card.Group>
        </Segment>
      ) : (
        <Segment loading={state.fetchState === 'LOADING'}>
          <Card.Group itemPerRow={3} stackable className={className} centered>
            <Ranking rankings={[rankings]} />
          </Card.Group>
        </Segment>
      )}
    </>
  );
};

export default Threecards;
