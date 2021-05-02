import { Product } from 'model/index';
import REQUEST_STATE, { ProductsActionTypes } from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  productsList: [],
};

export type State = {
  fetchState: string;
  productsList: Product[];
};
export type ValueOf<T> = T[keyof T];
export type Action = {
  type: ValueOf<typeof ProductsActionTypes>;
  payload?: { products: Product[] };
};

export const productindexReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case ProductsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case ProductsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        productsList:
          action.payload !== undefined ? action.payload.products : [],
      };
    case ProductsActionTypes.ERROR:
      return {
        ...state,
        fetchState: REQUEST_STATE.ERROR,
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};
