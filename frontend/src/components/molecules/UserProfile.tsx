import { FC, Suspense } from 'react';
import {
  Container,
  Image,
  Header,
  Label,
  Icon,
  Grid,
  Table,
  Segment,
  Button,
} from 'semantic-ui-react';
import dayjs from 'dayjs';
import FollowButton from 'container/button/EnhancedFollowButton';
import { CurrentUser } from 'model/index';
import ErrorBoundary from 'error/ErrorBoundary';

const UserProfile: FC<{ user: CurrentUser; currentuser: CurrentUser }> = ({
  user,
  currentuser,
}) => (
  <>
    <Container textAlign="center">
      <Image src={user?.icon?.url} circular size="small" centered />
      <Header content={user.name} textAlign="center" data-testid="name" />
      <Segment basic>
        <Segment basic>
          {currentuser.email && (
            <ErrorBoundary statusMessages={{ 401: 'エラーが発生しました。' }}>
              <Suspense
                fallback={
                  <Button
                    circular
                    icon="user plus"
                    content="フォロー"
                    disabled
                  />
                }
              >
                <FollowButton />
              </Suspense>
            </ErrorBoundary>
          )}
        </Segment>
        <Label>
          <Icon name="calendar alternate outline" />
          {dayjs(user.created_at).format('YYYY年MM月')}から利用中
        </Label>
        <Label>
          <Icon name="user" />
          フォロー中
        </Label>
        <Label>
          <Icon name="users" />
          フォロワー
        </Label>
      </Segment>
      <Grid centered>
        <Grid.Column width={9}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>プロフィール</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>{user.profile}</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </Container>
  </>
);

export default UserProfile;
