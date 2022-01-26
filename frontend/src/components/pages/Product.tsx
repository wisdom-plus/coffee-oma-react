import { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'semantic-ui-react';
import ProductShow from 'container/EnhancedProductShow';
import ErrorBoundary from 'error/ErrorBoundary';
import ProductShowLoading from 'error/ProductShowLoading';
import { Outlet } from 'react-router-dom';
import ProductIndex from 'components/templates/ProductIndex';

type Props = {
  isshow?: boolean;
  isindex?: boolean;
};

const Product: FC<Props> = ({ isshow = false, isindex = false }) => (
  <>
    <Helmet title="Product" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      <Grid.Column>
        {isindex && <ProductIndex />}
        <Outlet />
        <ErrorBoundary statusMessages={{ 404: 'アイテムが存在しません。' }}>
          <Suspense fallback={<ProductShowLoading />}>
            {isshow && <ProductShow />}
          </Suspense>
        </ErrorBoundary>
      </Grid.Column>
    </Grid>
  </>
);

export default Product;
