import React, { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Fetchproductnew } from 'apis/Product';
import { useHistory } from 'react-router-dom';
import { ProductForm } from 'model/index';

export interface CustomFormData extends FormData {
  append(name: string, value: string | number | Blob, fileName?: string): void;
}

type props = {
  methods: UseFormReturn<ProductForm>;
  file: Blob | undefined;
  onSubmit: (data: ProductForm) => Promise<void>;
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
};
const useNewform = (): props => {
  const [file, setFile] = useState<Blob>();
  const history = useHistory();
  const methods = useForm<ProductForm>({ criteriaMode: 'all' });

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files && setFile(e.target.files[0]);

  const onSubmit = async (data: ProductForm) => {
    const formdata = new FormData() as CustomFormData;
    const keys = Object.keys(data);
    const values = Object.values(data);
    keys.map((key, index) => formdata.append(`product[${key}]`, values[index]));
    if (file !== undefined) {
      formdata.append('product[image]', file);
    }
    await Fetchproductnew(formdata)
      .then((result) =>
        result !== undefined && result === 201
          ? history.push('/products', {
              message: '登録成功しました。',
              type: 'success',
            })
          : history.push('/product/new', {
              message: '登録に失敗しました。',
              type: 'error',
            }),
      )
      .catch(() =>
        history.push('/', { message: 'エラーが発生しました。', type: 'error' }),
      );
  };

  return { methods, file, onSubmit, onChangeFile };
};

export default useNewform;
