import { FC } from 'react';
import { Image, Grid } from 'semantic-ui-react';

const SixImageColumn: FC<{ image: string }> = ({ image }) => (
  <Grid.Column verticalAlign="middle" floated="left" width={6}>
    <Image src={image} rounded size="large" bordered />
  </Grid.Column>
);

export default SixImageColumn;
