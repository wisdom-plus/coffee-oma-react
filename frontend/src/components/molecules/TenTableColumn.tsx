import { FC } from 'react';
import { Grid, Table } from 'semantic-ui-react';
import { Product } from 'model/index';

const TenTableColumn: FC<{ product: Product }> = ({ product }) => (
  <Grid.Column width={10}>
    <Table celled definition textAlign="center">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell width={3}>fldas</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>価格</Table.Cell>
          <Table.Cell>{product.price}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>ブランド</Table.Cell>
          <Table.Cell>{product.shopname}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>評価</Table.Cell>
          <Table.Cell>b</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>タグ</Table.Cell>
          <Table.Cell>b</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <a href={product.url} className="ui red button">
              商品を詳しく見る
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Grid.Column>
);

export default TenTableColumn;
