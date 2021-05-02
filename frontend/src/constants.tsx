const REQUEST_STATE = {
  INITIAL: 'INITIAL',
  LOADING: 'LOADING',
  OK: 'OK',
  ERROR: 'ERROR',
} as const;

export const HTTP_STATUS_CODE = {
  NOT_ACCEPTABLE: 406,
};

export default REQUEST_STATE;