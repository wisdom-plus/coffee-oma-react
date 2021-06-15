import { FC, useEffect, useState } from 'react';
import {
  Container,
  Image,
  Header,
  Label,
  Icon,
  Grid,
  Table,
  Segment,
} from 'semantic-ui-react';
import dayjs from 'dayjs';
import { useParams, useHistory } from 'react-router-dom';
import { CurrentUser } from 'model/index';
import { FetchRegistrationShow } from 'apis/User';
import FollowButton from 'components/atoms/FollowButton';
import { useRecoilValue } from 'recoil';
import LoginState from 'atom';

const UserProfile: FC = () => {
  const [user, setUser] = useState<CurrentUser>({} as CurrentUser);
  const { id } = useParams<{ id: string }>();
  const currentuser = useRecoilValue(LoginState);
  const history = useHistory();

  useEffect(() => {
    FetchRegistrationShow(id)
      .then((result) =>
        result !== 401
          ? setUser((prevUser) => ({ ...prevUser, ...result.data }))
          : history.push('/', {
              message: 'エラーが発生しました。',
              type: 'error',
            }),
      )
      .catch(() =>
        history.push('/', {
          message: 'エラーが発生しました。',
          type: 'error',
        }),
      );
  }, [id, history]);

  return (
    <>
      <Container textAlign="center">
        <Image src={user?.icon?.url} circular size="small" centered />
        <Header content={user.name} textAlign="center" data-testid="name" />
        <Segment basic>
          <Segment basic>{currentuser.email && <FollowButton />}</Segment>
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
};

export default UserProfile;
