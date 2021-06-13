import React, { FC, useState } from 'react';
import { Form, Card, Table, Grid, Input, TextArea } from 'semantic-ui-react';
import { useForm, Controller } from 'react-hook-form';
import { Fetchproductnew } from 'apis/Product';
import { useHistory } from 'react-router-dom';
import { ProductForm } from 'model/index';
import ProductImage from 'components/atoms/ProductImage';

export interface CustomFormData extends FormData {
  append(name: string, value: string | number | Blob, fileName?: string): void;
}

const Newform: FC = () => {
  const [file, setFile] = useState<Blob>();
  const history = useHistory();
  const {
    control,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ProductForm>({ criteriaMode: 'all' });

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
      .catch(() => reset());
  };

  return (
    <Form size="small" onSubmit={handleSubmit(onSubmit)}>
      <Grid columns={3} centered>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Card centered fluid>
            <ProductImage file={file} onChange={onChangeFile} />
            <Card.Content>
              <Card.Header>
                <Controller
                  name="name"
                  control={control}
                  rules={{
                    required: '商品名が入力されていません。',
                  }}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Form.Field
                      error={
                        errors.name && {
                          content: errors.name?.message,
                          pointing: 'below',
                        }
                      }
                      data-testid="name"
                      control={Input}
                      label="商品名"
                      icon="shopping cart"
                      required
                      iconPosition="left"
                      placeholder="name"
                      onChange={onChange}
                      onBlur={onBlur}
                      ref={ref}
                      value={value}
                    />
                  )}
                />
              </Card.Header>
              <Card.Meta>
                <Controller
                  name="shopname"
                  control={control}
                  render={({ field: { onChange, onBlur, value, ref } }) => (
                    <Form.Field
                      data-testid="shopname"
                      control={Input}
                      label="メーカー名"
                      icon="credit card alternative"
                      iconPosition="left"
                      placeholder="shop-name"
                      onChange={onChange}
                      onBlur={onBlur}
                      ref={ref}
                      value={value}
                    />
                  )}
                />
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Controller
                name="price"
                control={control}
                rules={{
                  required: '商品価格が入力されていません。',
                }}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Form.Field
                    error={
                      errors.price && {
                        content: errors.price?.message,
                        pointing: 'below',
                      }
                    }
                    data-testid="price"
                    control={Input}
                    label="商品名"
                    icon="yen"
                    required
                    iconPosition="left"
                    placeholder="price"
                    type="number"
                    min="0"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    value={value}
                  />
                )}
              />
            </Card.Content>
            <Card.Content extra>
              <Controller
                name="url"
                control={control}
                render={({ field: { onChange, onBlur, value, ref } }) => (
                  <Form.Field
                    data-testid="url"
                    control={Input}
                    label="商品URL"
                    icon="sitemap"
                    iconPosition="left"
                    placeholder="URL"
                    type="url"
                    onChange={onChange}
                    onBlur={onBlur}
                    ref={ref}
                    value={value}
                  />
                )}
              />
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
                  <Controller
                    name="caption"
                    control={control}
                    rules={{
                      required: '商品の説明が入力されていません。',
                    }}
                    render={({ field: { onChange, onBlur, value, ref } }) => (
                      <Form.Field
                        error={
                          errors.caption && {
                            content: errors.caption?.message,
                            pointing: 'below',
                          }
                        }
                        data-testid="caption"
                        control={TextArea}
                        placeholder="item-caption"
                        id="caption"
                        rows={6}
                        onChange={onChange}
                        onBlur={onBlur}
                        ref={ref}
                        value={value}
                      />
                    )}
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Form.Field style={{ textAlign: 'center', justifyContent: 'center' }}>
            <Form.Button color="teal" content="submit" data-testid="submit" />
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Form>
  );
};

export default Newform;
