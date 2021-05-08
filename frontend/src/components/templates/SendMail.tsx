import { FC } from 'react';
import { Header, Grid, Segment } from 'semantic-ui-react';

const SendMail: FC = () => (
  <>
    <Header
      as="h1"
      content="確認メールを送信しました"
      textAlign="center"
      style={{ marginBottom: '1rem' }}
    />
    <Grid columns={3} centered style={{ margin: '4em' }}>
      <Grid.Column width={3} />
      <Grid.Column width={10} as={Segment}>
        <Header as="h4" textAlign="center">
          入力されたメールアドレスにアドレス確認メールを送信しました。
          <Header.Subheader>
            メールが受信されない場合はこちらから
          </Header.Subheader>
        </Header>
      </Grid.Column>
      <Grid.Column width={3} />
    </Grid>
  </>
);

export default SendMail;
