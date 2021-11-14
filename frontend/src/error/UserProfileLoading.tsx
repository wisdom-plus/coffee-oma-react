import { FC } from 'react';
import {
  Container,
  Button,
  Grid,
  Table,
  Segment,
  Placeholder,
} from 'semantic-ui-react';

const UserProfileLoading: FC = () => (
  <>
    <Container textAlign="center">
      <Placeholder
        style={{
          height: 150,
          width: 150,
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <Placeholder.Image size="small" />
      </Placeholder>
      <Placeholder style={{ marginLeft: 'auto', marginRight: 'auto' }}>
        <Placeholder.Line length="full" />
      </Placeholder>
      <Segment basic>
        <Button primary disabled>
          Follow
        </Button>
      </Segment>
      <Grid centered>
        <Grid.Column width={9}>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Placeholder>
                    <Placeholder.Line />
                  </Placeholder>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Placeholder>
                    <Placeholder.Paragraph>
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                      <Placeholder.Line />
                    </Placeholder.Paragraph>
                  </Placeholder>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid>
    </Container>
  </>
);

export default UserProfileLoading;
