import { FC, useEffect, useReducer } from 'react';
import { Card, Segment, Loader, Dimmer } from 'semantic-ui-react';
import Ranking from 'components/atoms/Ranking';
import Indexcards from 'components/atoms/Indexcards';
import Fetchproductindex from 'apis/product';
import {
  productindexReducer,
  initialState,
  productsActionTypes,
} from 'reducers/Product';
import REQUEST_STATE from 'constants';

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

const Threecards: FC<Props> = ({ isindex = false, className }) => {
  const [state, dispatch] = useReducer(productindexReducer, initialState);

  useEffect(() => {
    dispatch({ type: productsActionTypes.FETCHING });
    Fetchproductindex()
      .then((data) =>
        dispatch({
          type: productsActionTypes.FETCH_SUCCESS,
          payload: data,
        }),
      )
      .catch(() => dispatch({ type: productsActionTypes.ERROR }));
  }, []);

  return (
    <Segment>
      {state.fetchState === 'LOADING' ? (
        <Dimmer active>
          <Loader />
        </Dimmer>
      ) : (
        <Card.Group itemPerRow={3} stackable className={className}>
          {isindex ? (
            <>
              <Indexcards products={state.productsList} />
            </>
          ) : (
            <Ranking rankings={[rankings]} />
          )}
        </Card.Group>
      )}
    </Segment>
  );
};

export default Threecards;
