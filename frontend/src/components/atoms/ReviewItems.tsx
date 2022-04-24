import { FC } from 'react';
import { Item, Segment, Header, Rating } from 'semantic-ui-react';
import { Review, CurrentUser } from 'model/index';
import ReviewRemoveButton from 'container/button/EnhancedReviewRemoveButton';

const ReviewItems: FC<{
  reviews: Review[];
  user: CurrentUser;
}> = ({ reviews, user }) => (
  <Item.Group>
    {reviews.map((review) => (
      <Segment
        data-testid={`review${review.id}`}
        key={review.id}
        style={{ display: 'inline-block', width: '70%' }}
      >
        <Item>
          <Item.Content>
            <Header as="h3">{review.title}</Header>
            <Item.Meta>
              <Rating
                icon="star"
                defaultRating={review.rate}
                disabled
                maxRating={5}
              />
              <span className="data" style={{ marginLeft: '0.6em' }}>
                {/* {review.time_ago} なぜか利用できない */}前
              </span>
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
