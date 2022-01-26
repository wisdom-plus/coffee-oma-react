import { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'semantic-ui-react';
import ErrorBoundary from 'error/ErrorBoundary';
import ProductShowLoading from 'error/ProductShowLoading';
import { Outlet } from 'react-router-dom';

const Product: FC = () => (
  <>
    <Helmet title="Product" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      <Grid.Column>
        <ErrorBoundary statusMessages={{ 404: 'アイテムが存在しません。' }}>
          <Suspense fallback={<ProductShowLoading />}>
            <Outlet />
          </Suspense>
        </ErrorBoundary>
      </Grid.Column>
    </Grid>
  </>
);

export default Product;
