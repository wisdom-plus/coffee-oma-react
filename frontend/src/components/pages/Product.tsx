import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'semantic-ui-react';
import ProductIndex from 'components/templates/ProductIndex';
import ProductNew from 'components/templates/ProductNew';
import ProductShow from 'components/templates/ProductShow';
import ProductRank from 'components/templates/ProductRank';

type Props = {
  isindex?: boolean;
  isshow?: boolean;
  isnew?: boolean;
  isrank?: boolean;
};

const Product: FC<Props> = ({ isindex, isshow, isnew, isrank }) => (
  <>
    <Helmet title="Product" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      <Grid.Column>
        {isindex && <ProductIndex />}
        {isrank && <ProductRank />}
        {isshow && <ProductShow />}
        {isnew && <ProductNew />}
      </Grid.Column>
    </Grid>
  </>
);

export default Product;
