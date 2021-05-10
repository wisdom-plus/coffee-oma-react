import { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import { Helmet } from 'react-helmet';
import SignInForm from 'components/molecules/SignInForm';
import SignOut from 'components/atoms/SignOut';

type Props = {
  issignin?: boolean;
  issignout?: boolean;
};

const Session: FC<Props> = ({ issignin, issignout }) => (
  <>
    <Helmet title="Session" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      <Grid.Column>
        {issignin && <SignInForm />}
        {issignout && <SignOut />}
      </Grid.Column>
    </Grid>
  </>
);

export default Session;
