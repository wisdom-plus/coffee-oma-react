import { useState } from 'react';
import { useForm, UseFormReturn } from 'react-hook-form';
import { Fetchproductnew } from 'apis/Product';
import { useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();
  const methods = useForm<ProductForm>({ criteriaMode: 'all', mode: 'onBlur' });

  const onChangeFile = (e: React.ChangeEvent<HTMLInputElement>) =>
    e.target.files && setFile(e.target.files[0]);

  const CreateFormData = (data: ProductForm): CustomFormData => {
    const formdata = new FormData() as CustomFormData;
    const keys = Object.keys(data);
    const values = Object.values(data);
    keys.map((key, index) => formdata.append(`product[${key}]`, values[index]));
    if (file !== undefined) {
      formdata.append('product[image]', file);
    }

    return formdata;
  };

  const onSubmit = async (data: ProductForm) => {
    const formdata = CreateFormData(data);

    try {
      const response = await Fetchproductnew(formdata);
      if (response === 201) {
        navigate('/products', {
          state: { message: '登録に成功しました。', type: 'success' },
        });
      }
    } catch (e) {
      navigate('/product/new', {
        state: { message: '登録に失敗しました。', type: 'error' },
      });
    }
  };

  return { methods, file, onSubmit, onChangeFile };
};

export default useNewform;
