import { FC } from 'react';
import { Divider, Header, Icon } from 'semantic-ui-react';
import ReviewItems from 'components/atoms/ReviewItems';
import { FetchReviewExists } from 'apis/Review';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

const ReviewArea: FC = () => {
  const { id } = useParams<{ id: string }>();
  const { data: reviews = [] } = useQuery([id, 'review'], () =>
    FetchReviewExists(id),
  );

  return (
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
};

export default ReviewArea;
