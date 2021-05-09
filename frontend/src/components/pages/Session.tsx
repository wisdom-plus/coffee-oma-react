import { FC } from 'react';
import { Grid, Header } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import SignInForm from 'components/molecules/SignInForm';

const Session: FC = () => (
  <>
    <Helmet title="Session" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      <Grid.Column>
        <Header
          as="h1"
          content="ログイン"
          textAlign="center"
          style={{ marginBottom: '1rem' }}
        />
        <SignInForm />
      </Grid.Column>
    </Grid>
  </>
);

export default Session;
