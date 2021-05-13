import { FC } from 'react';
import { Grid, Segment, Header } from 'semantic-ui-react';

const ResetPasswordEdit: FC = () => (
  <>
    <Grid columns={3} centered style={{ margin: '4em' }}>
      <Grid.Column width={3} />
      <Grid.Column width={10}>
        <Segment>
          <Header
            as="h3"
            textAlign="center"
            content="パスワードをリセットします"
          />
        </Segment>
      </Grid.Column>
    </Grid>
  </>
);

export default ResetPasswordEdit;
