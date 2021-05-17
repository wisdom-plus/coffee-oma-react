import React, { FC, useState } from 'react';
import {
  Form,
  Card,
  Table,
  Grid,
  Input,
  Ref,
  TextArea,
} from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
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
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ProductForm>({ criteriaMode: 'all' });

  const namehook = register('name', {
    required: '商品名が入力されていません。',
  });
  const shopnamehook = register('shopname');
  const pricehook = register('price', {
    required: '商品価格が入力されていません。',
  });
  const urlhook = register('url');
  const captionhook = register('caption', {
    required: '商品の説明が入力されていません。',
  });
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) =>
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
          : reset(),
      )
      .catch(() => reset());
  };

  return (
    <Form size="small" onSubmit={handleSubmit(onSubmit)}>
      <Grid columns={3} centered>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Card centered fluid>
            <ProductImage file={file} onChange={onChange} />
            <Card.Content>
              <Card.Header>
                <Ref innerRef={namehook.ref}>
                  <Form.Field
                    error={
                      errors.name && {
                        content: errors.name?.message,
                        pointing: 'below',
                      }
                    }
                    control={Input}
                    label="商品名"
                    icon="shopping cart"
                    required
                    iconPosition="left"
                    placeholder="name"
                    onChange={namehook.onChange}
                    onBlur={namehook.onBlur}
                    name={namehook.name}
                  />
                </Ref>
              </Card.Header>
              <Card.Meta>
                <Ref innerRef={shopnamehook.ref}>
                  <Form.Field
                    control={Input}
                    label="メーカー名"
                    icon="credit card alternative"
                    iconPosition="left"
                    placeholder="shop-name"
                    onChange={shopnamehook.onChange}
                    onBlur={shopnamehook.onBlur}
                    name={shopnamehook.name}
                  />
                </Ref>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <Ref innerRef={pricehook.ref}>
                <Form.Field
                  error={
                    errors.price && {
                      content: errors.price?.message,
                      pointing: 'below',
                    }
                  }
                  control={Input}
                  label="商品名"
                  icon="yen"
                  required
                  iconPosition="left"
                  placeholder="price"
                  type="number"
                  min="0"
                  onChange={pricehook.onChange}
                  onBlur={pricehook.onBlur}
                  name={pricehook.name}
                />
              </Ref>
            </Card.Content>
            <Card.Content extra>
              <Ref innerRef={urlhook.ref}>
                <Form.Field
                  control={Input}
                  label="商品URL"
                  icon="sitemap"
                  iconPosition="left"
                  placeholder="URL"
                  type="url"
                  onChange={urlhook.onChange}
                  onBlur={urlhook.onBlur}
                  name={urlhook.name}
                />
              </Ref>
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
                  <Ref innerRef={captionhook.ref}>
                    <Form.Field
                      control={TextArea}
                      placeholder="item-caption"
                      id="caption"
                      onChange={captionhook.onChange}
                      onBlur={captionhook.onBlur}
                      name={captionhook.name}
                      rows={6}
                      error={
                        errors.caption && {
                          content: errors.caption?.message,
                          pointing: 'below',
                        }
                      }
                    />
                  </Ref>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Form.Field style={{ textAlign: 'center', justifyContent: 'center' }}>
            <Form.Button color="teal" content="submit" />
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Form>
  );
};

export default Newform;
