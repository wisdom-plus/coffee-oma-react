import { FC } from 'react';
import { Button, Card, Placeholder } from 'semantic-ui-react';

const HomeThreeCardsLoading: FC = () => (
  <Card.Group itemsPerRow={3} stackable centered style={{ paddingTop: '3em' }}>
    {[1, 2, 3].map((value) => (
      <Card style={{ margin: '0.875em 1em' }} key={value}>
        <Placeholder>
          <Placeholder.Image
            square
            style={{ height: '150px', width: '150px' }}
          />
        </Placeholder>
        <Card.Content>
          <Card.Header>
            <Placeholder>
              <Placeholder.Header>
                <Placeholder.Line />
              </Placeholder.Header>
            </Placeholder>
          </Card.Header>
          <Card.Meta>
            <Placeholder>
              <Placeholder.Line />
            </Placeholder>
          </Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <Placeholder>
            <Placeholder.Header>
              <Placeholder.Line />
            </Placeholder.Header>
          </Placeholder>
        </Card.Content>
      </Card>
    ))}

    <Button
      color="teal"
      size="huge"
      style={{ marginTop: '2em' }}
      icon="signal"
      content="ランキングを詳しく見る"
      disabled
    />
  </Card.Group>
);

export default HomeThreeCardsLoading;
