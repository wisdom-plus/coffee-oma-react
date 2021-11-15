import { FC } from 'react';
import { Controller, FieldError } from 'react-hook-form';
import { Form, Ref } from 'semantic-ui-react';
import { FormInputType } from 'model/index';
import RateHiddenForm from 'components/atoms/RateHiddenForm';
/* eslint-disable react/jsx-props-no-spreading */

const RateFormController: FC<{
  errors: Partial<Record<FormInputType, FieldError | undefined>>;
  errormessage: string;
}> = ({ errors, errormessage }) => (
  <Controller
    name="rate"
    rules={{ required: errormessage }}
    defaultValue=""
    render={({ field: { ref, ...method } }) => (
      <Ref innerRef={ref}>
        <Form.Field
          error={
            errors.rate && {
              content: errors.rate?.message,
              pointing: 'below',
            }
          }
          control={RateHiddenForm}
          label="レート"
          data-testid="rate"
          required
          {...method}
        />
      </Ref>
    )}
  />
);

export default RateFormController;
