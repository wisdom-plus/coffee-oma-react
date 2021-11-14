import { FC, Suspense } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'semantic-ui-react';
import ProductIndex from 'components/templates/ProductIndex';
import ProductNew from 'components/templates/ProductNew';
import ProductShow from 'container/EnhancedProductShow';
import ProductRank from 'components/templates/ProductRank';
import ErrorBoundary from 'error/ErrorBoundary';
import ProductShowLoading from 'error/ProductShowLoading';

type Props = {
  isindex?: boolean;
  isshow?: boolean;
  isnew?: boolean;
  isrank?: boolean;
};

const Product: FC<Props> = ({
  isindex = false,
  isshow = false,
  isnew = false,
  isrank = false,
}) => (
  <>
    <Helmet title="Product" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      <Grid.Column>
        {isindex && <ProductIndex />}
        {isrank && <ProductRank />}
        {isnew && <ProductNew />}
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
