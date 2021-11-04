import React, { FC, useState } from 'react';
import { Form, Card, Table, Grid } from 'semantic-ui-react';
import { useForm, FormProvider } from 'react-hook-form';
import { Fetchproductnew } from 'apis/Product';
import { useHistory } from 'react-router-dom';
import { ProductForm } from 'model/index';
import ProductImage from 'components/atoms/ProductImage';
import FormController from 'container/EnhancedFormController';
/* eslint-disable react/jsx-props-no-spreading */

export interface CustomFormData extends FormData {
  append(name: string, value: string | number | Blob, fileName?: string): void;
}

const Newform: FC = () => {
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

  return (
    <FormProvider {...methods}>
      <Form size="small" onSubmit={methods.handleSubmit(onSubmit)}>
        <Grid columns={3} centered>
          <Grid.Column width={3} />
          <Grid.Column width={10}>
            <Card centered fluid>
              <ProductImage file={file} onChange={onChangeFile} />
              <Card.Content>
                <Card.Header>
                  <FormController
                    name="name"
                    label="商品名"
                    icon="shopping cart"
                    required
                    errormessage="商品名が入力されていません。"
                  />
                </Card.Header>
                <Card.Meta>
                  <FormController
                    label="メーカー名"
                    icon="credit card alternative"
                    name="shopname"
                  />
                </Card.Meta>
              </Card.Content>
              <Card.Content extra>
                <FormController
                  name="price"
                  label="商品名"
                  icon="yen"
                  required
                  errormessage="商品価格が入力されていません。"
                />
              </Card.Content>
              <Card.Content extra>
                <FormController name="url" label="商品URL" icon="sitemap" />
              </Card.Content>
            </Card>
            <Table celled>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell>
                    <Form.Field label="商品説明文" />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                <Table.Row>
                  <Table.Cell>
                    <FormController
                      name="caption"
                      textarea
                      errormessage="商品の説明が入力されていません。"
                    />
                  </Table.Cell>
                </Table.Row>
              </Table.Body>
            </Table>
            <Form.Field
              style={{ textAlign: 'center', justifyContent: 'center' }}
            >
              <Form.Button color="teal" content="submit" data-testid="submit" />
            </Form.Field>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </Form>
    </FormProvider>
  );
};

export default Newform;
