import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'semantic-ui-react';
import Productindex from 'components/templates/Productindex';
import Productnew from 'components/templates/Productnew';
import Productshow from 'components/templates/Productshow';

type Props = {
  isindex?: boolean;
  isshow?: boolean;
  isnew?: boolean;
  productId: number;
};

const Product: FC<Props> = ({ isindex, isshow, isnew, productId }) => (
  <>
    <Helmet title="Product" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      <Grid.Column>
        {isindex && <Productindex />}
        {isshow && <Productshow productId={productId} />}
        {isnew && <Productnew />}
      </Grid.Column>
    </Grid>
  </>
);

export default Product;
