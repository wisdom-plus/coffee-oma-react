import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Header, Grid, Segment } from 'semantic-ui-react';

const SignOut: FC = () => (
  <div>
    <Grid columns={3} centered style={{ margin: '4em' }}>
      <Grid.Column width={3} />
      <Grid.Column width={10} as={Segment}>
        <Header as="h4" textAlign="center" data-testid="logout-message">
          ログアウトが正常に行われました
          <Header.Subheader>
            ５秒後にトップページに移動します。
            <Link to="/">Topへ</Link>
          </Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column width={3} />
    </Grid>
  </div>
);

export default SignOut;
