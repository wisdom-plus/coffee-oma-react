import { FC } from 'react';
import { Item, Segment, Header } from 'semantic-ui-react';
import { Review } from 'model/index';

const ReviewItems: FC<{ reviews: Review[] }> = ({ reviews }) => (
  <Item.Group>
    {reviews.map((review) => (
      <Item key={review.id}>
        <Segment>
          <Item>
            <Item.Content>
              <Header as="h3">{review.title}</Header>
              <Item.Meta>
                <span className="data">{review.created_at}前</span>
              </Item.Meta>
              <Item.Description>{review.content}</Item.Description>
            </Item.Content>
          </Item>
        </Segment>
      </Item>
    ))}
  </Item.Group>
);

export default ReviewItems;
