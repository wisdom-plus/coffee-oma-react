import { FC } from 'react';
import { Form, Card, Table, Grid, Button } from 'semantic-ui-react';
import { FormProvider, UseFormReturn } from 'react-hook-form';
import ProductImage from 'container/form/EnhancedProductImage';
import FormController from 'container/form/EnhancedFormController';
import { ProductForm } from 'model/index';
/* eslint-disable react/jsx-props-no-spreading */

export interface CustomFormData extends FormData {
  append(name: string, value: string | number | Blob, fileName?: string): void;
}

type newformtype = {
  methods: UseFormReturn<ProductForm>;
  file: Blob | undefined;
  onSubmit: (data: ProductForm) => Promise<void>;
  onChangeFile: (e: React.ChangeEvent<HTMLInputElement>) => void | null;
};

const Newform: FC<newformtype> = ({
  methods,
  file,
  onSubmit,
  onChangeFile,
}) => (
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
                    required
                    errormessage="商品の説明が入力されていません。"
                  />
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
          <Form.Field style={{ textAlign: 'center', justifyContent: 'center' }}>
            <Form.Button color="teal" data-testid="submit" animated="fade">
              <Button.Content visible>登録</Button.Content>
              <Button.Content hidden>Submit</Button.Content>
            </Form.Button>
          </Form.Field>
        </Grid.Column>
        <Grid.Column width={3} />
      </Grid>
    </Form>
  </FormProvider>
);

export default Newform;
