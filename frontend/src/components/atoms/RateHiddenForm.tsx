import { FC } from 'react';
import { Input } from 'semantic-ui-react';
import Rating from 'react-rating';
/* eslint-disable react/jsx-props-no-spreading */

const RateHiddenForm: FC = () => (
  <>
    <Rating
      className="ui star rating rate-form"
      stop={5}
      quiet
      fullSymbol={<i className="active icon" />}
      emptySymbol={<i className="icon" />}
      placeholderSymbol={<i className="active icon" />}
    />
    <Input type="hidden" />
  </>
);

export default RateHiddenForm;
