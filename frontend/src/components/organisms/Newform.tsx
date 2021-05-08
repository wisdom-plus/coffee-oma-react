import React, { FC, useState } from 'react';
import { Form, Card, Table, Grid, Label } from 'semantic-ui-react';
import { useForm } from 'react-hook-form';
import { Fetchproductnew } from 'apis/Product';
import { Redirect } from 'react-router-dom';
import { ProductForm } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

type State = {
  created: 'OK' | 'Failure';
};

const Newform: FC = () => {
  const [state, setState] = useState<State>({ created: 'Failure' });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ProductForm>({ criteriaMode: 'all' });

  const onSubmit = async (data: ProductForm) => {
    await Fetchproductnew(data)
      .then((result) =>
        result !== undefined && result.status === 'OK'
          ? setState({ created: result.status })
          : reset(),
      )
      .catch(() => reset());
  };

  return (
    <Form size="small" onSubmit={handleSubmit(onSubmit)}>
      {state.created === 'OK' && (
        <Redirect
          to={{
            pathname: '/products',
            state: { message: '登録が完了しました' },
          }}
        />
      )}
      <Grid columns={3} centered>
        <Grid.Column width={3} />
        <Grid.Column width={10}>
          <Card centered fluid>
            <Card.Content>
              <Card.Header>
                <label htmlFor="name">
                  商品名
                  {errors.name && (
                    <Label
                      pointing="below"
                      color="red"
                      basic
                      style={{ marginLeft: '1em' }}
                    >
                      {errors.name?.message}
                    </Label>
                  )}
                  <input
                    type="text"
                    placeholder="item-name"
                    id="name"
                    {...register('name', {
                      required: '商品名が入力されていません。',
                    })}
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
                {errors.price && (
                  <Label
                    pointing="below"
                    color="red"
                    basic
                    style={{ marginLeft: '1em' }}
                  >
                    {errors.price?.message}
                  </Label>
                )}
                <input
                  type="number"
                  placeholder="item-price"
                  id="price"
                  min="0"
                  {...register('price', {
                    required: '商品価格が入力されていません。',
                  })}
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
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <label htmlFor="caption">
                    商品の説明
                    {errors.caption && (
                      <Label
                        pointing="below"
                        color="red"
                        basic
                        style={{ marginLeft: '1em' }}
                      >
                        {errors.caption?.message}
                      </Label>
                    )}
                  </label>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <textarea
                    placeholder="item-caption"
                    id="caption"
                    {...register('caption', {
                      required: '商品の説明が入力されていません。',
                    })}
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
