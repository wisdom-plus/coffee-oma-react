import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Grid } from 'semantic-ui-react';
import SendMail from 'components/templates/SendMail';

type Props = {
  issendmail?: boolean;
};

const NoRender: FC<Props> = ({ issendmail }) => (
  <>
    <Helmet title="NoRender" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      <Grid.Column>{issendmail && <SendMail />}</Grid.Column>
    </Grid>
  </>
);

export default NoRender;
