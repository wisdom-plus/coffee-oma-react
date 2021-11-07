import { useFormContext, DeepMap, FieldError } from 'react-hook-form';
import { FormInputType, ruletype } from 'model/index';

/* eslint-disable react/jsx-props-no-spreading */

type prop = {
  errormessage?: string;
  required: boolean | undefined;
  min: boolean | undefined;
};

const useFormController = ({
  errormessage,
  required,
  min,
}: prop): {
  errors: DeepMap<Record<FormInputType, string>, FieldError>;
  rule: ruletype;
} => {
  const {
    formState: { errors },
  } = useFormContext<Record<FormInputType, string>>();

  const rule = () => {
    if (required) {
      return { required: errormessage };
    }
    if (min) {
      return {
        required: 'アカウント名が入力されていません。',
        minLength: {
          value: 2,
          message: 'アカウント名は最低2文字以上必要です',
        },
      };
    }

    return {};
  };

  return { errors, rule };
};

export default useFormController;
