import React, { FC, useReducer, useEffect } from 'react';
import { Grid } from 'semantic-ui-react';
import TenTableColumn from 'components/molecules/TenTableColumn';
import SixImagaeColumn from 'components/atoms/SixImageColumn';
import CaptionColumn from 'components/atoms/CaptionColumn';
import { Fetchproductshow } from 'apis/Product';
import { productshowReducer } from 'reducers/Product';
import { useParams } from 'react-router-dom';
import REQUEST_STATE, { ProductsActionTypes } from '../../constants';

const Productdefault = {
  id: 1,
  name: 'name',
  price: 0,
  caption: 'caption',
  url: 'url',
  shopname: 'shopname',
  image: { url: 'image' },
  likes_count: 0,
};

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  productsList: Productdefault,
};

const ShowTop: FC = () => {
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
    <Grid container stackable centered verticalAlign="middle">
      <Grid.Row>
        <SixImagaeColumn url={state.productsList.image.url} />
        <TenTableColumn product={state.productsList} />
      </Grid.Row>
      <Grid.Row>
        <CaptionColumn caption={state.productsList.caption} />
      </Grid.Row>
    </Grid>
  );
};

export default ShowTop;
