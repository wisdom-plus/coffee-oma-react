import { FC } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Header, Segment } from 'semantic-ui-react';

const ErrorMessage: FC<{ message: string }> = ({ message }) => (
  <>
    <Helmet title="Error" />
    <Grid centered textAlign="center" padded verticalAlign="middle">
      <Grid.Column>
        <Grid columns={3} centered style={{ margin: '4em' }}>
          <Grid.Column width={3} />
          <Grid.Column width={10} as={Segment}>
            <Header as="h4" textAlign="center" data-testid="errormessage">
              {message}
              <Header.Subheader>
                時間をおいてから再度アクセスしてください。
              </Header.Subheader>
            </Header>
          </Grid.Column>
          <Grid.Column width={3} />
        </Grid>
      </Grid.Column>
    </Grid>
  </>
);

export default ErrorMessage;
