import { FC } from 'react';
import { Image, Grid } from 'semantic-ui-react';

const SixImageColumn: FC<{ url: string }> = ({ url }) => (
  <Grid.Column verticalAlign="middle" floated="left" width={6}>
    <Image src={url} rounded size="large" bordered />
  </Grid.Column>
);

export default SixImageColumn;
