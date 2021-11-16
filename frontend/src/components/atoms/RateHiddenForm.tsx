import { FC, useState } from 'react';
import Rating from 'react-rating';

/* eslint-disable react/jsx-props-no-spreading */

const RateHiddenForm: FC = () => {
  const [state, setState] = useState<number>(0);

  return (
    <>
      <Rating
        className="ui star rating rate-form"
        stop={5}
        quiet
        fullSymbol={<i className="active icon" />}
        emptySymbol={<i className="icon" />}
        placeholderSymbol={<i className="active icon" />}
        onChange={(value) => {
          setState(() => value);
        }}
      />
      <input hidden type="number" name="rate" defaultValue={state} />
    </>
  );
};

export default RateHiddenForm;
