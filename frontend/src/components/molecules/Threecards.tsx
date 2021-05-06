<<<<<<< HEAD
import { FC } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Ranking from 'components/atoms/Ranking';
import Indexcards from 'components/atoms/Indexcards';
import Railtotop from 'components/atoms/Railtotop';
=======
import { FC, useEffect, useReducer } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Ranking from 'components/atoms/Ranking';
import Indexcards from 'components/atoms/Indexcards';
import { Fetchproductindex } from 'apis/product';
import { productindexReducer, initialState } from 'reducers/Product';
import { ProductsActionTypes } from '../../constants';
>>>>>>> product

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

<<<<<<< HEAD
const Threecards: FC<Props> = ({ isindex = false, className }) => (
  <Segment>
    <Card.Group itemPerRow={3} stackable className={className}>
      {isindex ? (
        <>
          <Railtotop />
          <Indexcards products={[products]} />
        </>
      ) : (
        <Ranking rankings={[rankings]} />
      )}
    </Card.Group>
  </Segment>
);
=======
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
        <Segment loading={state.fetchState === 'LOADING'}>
          <Card.Group
            itemPerRow={3}
            stackable
            className={className}
            centered
            style={{ minHeight: '700px' }}
          >
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
>>>>>>> product

export default Threecards;
