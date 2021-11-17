import { FC } from 'react';
import { Item, Segment, Header } from 'semantic-ui-react';
import { Review, CurrentUser } from 'model/index';
import ReviewRemoveButton from 'components/atoms/ReveiwRemoveButton';

const ReviewItems: FC<{
  reviews: Review[];
  user: CurrentUser;
}> = ({ reviews, user }) => (
  <Item.Group>
    {reviews.map((review) => (
      <Segment
        key={review.id}
        style={{ display: 'inline-block', width: '70%' }}
      >
        <Item>
          <Item.Content>
            <Header as="h3">{review.title}</Header>
            <Item.Meta>
              <span className="data">{review.time_ago}前</span>
            </Item.Meta>
            <Item.Description style={{ whiteSpace: 'pre-wrap' }}>
              {review.content}
            </Item.Description>
            <Item.Extra>
              {review.user_id === user.id && (
                <ReviewRemoveButton ReviewId={review.id} />
              )}
            </Item.Extra>
          </Item.Content>
        </Item>
      </Segment>
    ))}
  </Item.Group>
);

export default ReviewItems;
