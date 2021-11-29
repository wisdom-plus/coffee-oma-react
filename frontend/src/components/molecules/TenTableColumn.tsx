import { FC, Suspense } from 'react';
import { Grid, Table, Button } from 'semantic-ui-react';
import { Product } from 'model/index';
import LikeButton from 'container/EnhancedLikeButton';
import ErrorBoundary from 'error/ErrorBoundary';
import { Rating } from 'react-simple-star-rating';

const TenTableColumn: FC<{ product: Product }> = ({ product }) => (
  <Grid.Column width={10}>
    <Table celled textAlign="center">
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell colSpan="3" data-testid="name">
            {product.name}
          </Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={4}>価格</Table.Cell>
          <Table.Cell>¥{product.price.toLocaleString()}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>ブランド</Table.Cell>
          <Table.Cell>{product.shopname}</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>評価</Table.Cell>
          <Table.Cell>
            {product.rate_average ? (
              <Rating
                ratingValue={product.rate_average}
                readonly
                onClick={() => true}
                allowHalfIcon
              />
            ) : (
              '評価がまだありません。'
            )}
          </Table.Cell>
        </Table.Row>
        {/* <Table.Row>
            <Table.Cell>タグ</Table.Cell>
            <Table.Cell>未実装</Table.Cell>
          </Table.Row> */}
        <Table.Row>
          <Table.Cell colSpan="3">
            <ErrorBoundary statusMessages={{ 404: 'エラーが発生しました。' }}>
              <Suspense
                fallback={<Button circular icon="heart" content="0" disabled />}
              >
                <LikeButton />
              </Suspense>
            </ErrorBoundary>
            <a href={product.url} className="ui blue circular button">
              商品を詳しく見る
            </a>
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Grid.Column>
);

export default TenTableColumn;
