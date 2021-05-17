import { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import TenTableColumn from 'components/molecules/TenTableColumn';
import SixImagaeColumn from 'components/atoms/SixImageColumn';
import { Product } from 'model/index';
import CaptionColumn from 'components/atoms/CaptionColumn';

const ShowTop: FC<{ product: Product }> = ({ product }) => (
  <Grid container stackable centered verticalAlign="middle">
    <Grid.Row>
      <SixImagaeColumn url={product.image.url} />
      <TenTableColumn product={product} />
    </Grid.Row>
    <Grid.Row>
      <CaptionColumn caption={product.caption} />
    </Grid.Row>
  </Grid>
);

export default ShowTop;
