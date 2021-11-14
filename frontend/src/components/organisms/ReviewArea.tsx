import { FC } from 'react';
import { Divider, Header, Icon } from 'semantic-ui-react';
import ReviewItems from 'components/atoms/ReviewItems';
import { Review } from 'model/index';

const ReviewArea: FC<{ reviews: Review[] }> = ({ reviews }) => (
  <>
    <Divider horizontal>
      <Header as="h4">
        <Icon name="pencil alternate" />
        ユーザーレビュー
      </Header>
    </Divider>
    {reviews && <ReviewItems reviews={reviews} />}
  </>
);

export default ReviewArea;
