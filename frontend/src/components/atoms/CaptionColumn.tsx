import { FC } from 'react';
import { Table, Grid } from 'semantic-ui-react';

const CaptionColumn: FC<{ caption: string }> = ({ caption }) => (
  <Grid.Column>
    <Table celled definition>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>商品の説明文</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        <Table.Row>
          <Table.Cell>{caption}</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </Grid.Column>
);

export default CaptionColumn;
