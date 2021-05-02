import REQUEST_STATE from '../constants';

export const initialState = {
  fetchState: REQUEST_STATE.INITIAL,
  productsList: [],
};

export const productsActionTypes = {
  FETCHING: 'FRTCHING',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  ERROR: 'ERROR',
} as const;

export type State = {
  fetchState: string;
  productsList: Product[];
};
export type ValueOf<T> = T[keyof T];
export type Action = {
  type: ValueOf<typeof productsActionTypes>;
  payload?: { products: Product[] };
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

export const productindexReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case productsActionTypes.FETCHING:
      return {
        ...state,
        fetchState: REQUEST_STATE.LOADING,
      };
    case productsActionTypes.FETCH_SUCCESS:
      return {
        fetchState: REQUEST_STATE.OK,
        productsList:
          action.payload !== undefined ? action.payload.products : [],
      };
    case productsActionTypes.ERROR:
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
