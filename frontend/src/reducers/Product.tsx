import REQUEST_STATE from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  productsList: [],
};

export const productsActionTypes = {
  FETCHING: 'FRTCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
};

export type Fetch = {
  fetchState: string;
  productsList: Product[];
};
export type Action = {
  type: string;
  payload: { products: Product[] };
};
export type Product = {
  id: number;
  name: string;
  price: number;
  caption: string;
  url: string;
  shopname: string;
  image: string;
};

export const productindexReduces = (
  state: Fetch,
  action: Action,
): Fetch | Error => {
  switch (action.type) {
    case productsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case productsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        productsList: action.payload.products,
      };
    default:
      throw new Error();
  }
};
