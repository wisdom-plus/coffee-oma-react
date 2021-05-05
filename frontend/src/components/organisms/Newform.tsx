import React, { FC, useState } from 'react';
import { Form, Card, Table, Grid } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import Product from 'components/pages/Product';
import { Fetchproductnew } from 'apis/product';
import { Redirect } from 'react-router-dom';

/* eslint-disable react/jsx-props-no-spreading */

export type Product = {
  name: string;
  price: number;
  caption: string;
  url: string;
  shopname: string;
};

type State = {
  created: 'OK' | 'Failure';
};

const Newform: FC = () => {
  const [state, setState] = useState<State>({ created: 'Failure' });
  const { register, handleSubmit, reset } = useForm<Product>();

  const onSubmit = (data: Product) => {
    Fetchproductnew(data)
      .then((result) =>
        result !== undefined && result.status === 'OK'
          ? setState({ created: result.status })
          : reset(),
      )
      .catch(() => reset());
  };

  return (
    <Form size="small" onSubmit={handleSubmit(onSubmit)}>
      {state.created === 'OK' && <Redirect to="/products" />}
      <Grid columns={3} centered>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Card centered fluid>
            <Card.Content>
              <Card.Header>
                <label htmlFor="name">
                  商品名
                  <input
                    type="text"
                    placeholder="item-name"
                    id="name"
                    {...register('name')}
                  />
                </label>
              </Card.Header>
              <Card.Meta>
                <label htmlFor="shopname">
                  商品名
                  <input
                    type="text"
                    placeholder="shop-name"
                    id="shopname"
                    {...register('shopname')}
                  />
                </label>
              </Card.Meta>
            </Card.Content>
            <Card.Content extra>
              <label htmlFor="price">
                商品価格
                <input
                  type="number"
                  placeholder="item-price"
                  id="price"
                  {...register('price')}
                />
              </label>
            </Card.Content>
            <Card.Content extra>
              <label htmlFor="url">
                商品URL
                <input
                  type="url"
                  placeholder="item-url"
                  id="url"
                  {...register('url')}
                />
              </label>
            </Card.Content>
          </Card>
          <Table caelled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Form.Field label="商品の説明" />
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <textarea
                    placeholder="item-caption"
                    id="caption"
                    {...register('caption')}
                  />
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
