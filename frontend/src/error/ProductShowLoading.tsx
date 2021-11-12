import { VFC } from 'react';
import { Header, Grid, Table, Placeholder } from 'semantic-ui-react';

const ProductShowLoading: VFC = () => (
  <>
    <Header
      as="h1"
      content="アイテム詳細"
      textAlign="center"
      style={{ marginBottom: '1rem' }}
    />
    <Grid container stackable centered verticalAlign="middle">
      <Grid.Row>
        <Grid.Column verticalAlign="middle" floated="left" width={6}>
          <Placeholder>
            <Placeholder.Image square />
          </Placeholder>
        </Grid.Column>
        <Grid.Column width={10}>
          <Table celled textAlign="center">
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell colSpan="3" data-testid="name">
                  <Placeholder fluid>
                    <Placeholder.Line length="full" />
                  </Placeholder>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell width={4}>
                  <Placeholder>
                    <Placeholder.Line length="full" />
                  </Placeholder>
                </Table.Cell>
                <Table.Cell>
                  <Placeholder>
                    <Placeholder.Line length="full" />
                  </Placeholder>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell width={4}>
                  <Placeholder>
                    <Placeholder.Line length="full" />
                  </Placeholder>
                </Table.Cell>
                <Table.Cell>
                  <Placeholder>
                    <Placeholder.Line length="full" />
                  </Placeholder>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell colSpan="3">
                  <Placeholder>
                    <Placeholder.Line length="full" />
                  </Placeholder>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column>
          <Table celled>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  <Placeholder>
                    <Placeholder.Line length="full" />
                  </Placeholder>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell style={{ whiteSpace: 'pre-wrap' }}>
                  <Placeholder fluid>
                    <Placeholder.Paragraph>
                      <Placeholder.Line length="full" />
                      <Placeholder.Line length="very long" />
                      <Placeholder.Line length="long" />
                      <Placeholder.Line length="full" />
                      <Placeholder.Line length="full" />
                      <Placeholder.Line length="very long" />
                    </Placeholder.Paragraph>
                  </Placeholder>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </>
);

export default ProductShowLoading;
