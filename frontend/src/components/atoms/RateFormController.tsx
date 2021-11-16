import { FC } from 'react';
import {
  UseFormRegister,
  FieldValues,
  UseFormSetValue,
  FieldError,
} from 'react-hook-form';
import { Rating, Form, Label } from 'semantic-ui-react';
/* eslint-disable react/jsx-props-no-spreading */

const RateFormController: FC<{
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  errors: Partial<Record<'rate', FieldError | undefined>>;
}> = ({ register, setValue, errors }) => (
  <>
    <Form.Field>
      <label htmlFor="rate">
        レート
        {errors.rate && (
          <Label pointing="below" prompt>
            {errors.rate?.message}
          </Label>
        )}
        <input
          hidden
          type="numer"
          id="rate"
          {...register('rate', { required: 'レートが入力されていません。' })}
        />
      </label>
    </Form.Field>
    <Rating
      maxRating={5}
      icon="star"
      size="massive"
      onRate={(e, value) => {
        setValue('rate', value.rating, { shouldValidate: true });
      }}
    />
  </>
);

export default RateFormController;
