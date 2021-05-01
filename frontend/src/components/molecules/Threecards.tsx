import { FC, useEffect } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import Ranking from 'components/atoms/Ranking';
import Indexcards from 'components/atoms/Indexcards';
import Fetchproductindex from 'apis/product';

const rankings = {
  id: 1,
  link: 's',
  imageurl: 's',
  itemname: 's',
  meta: 's',
  shopname: 's',
  likescount: 1,
};

const products = {
  id: 1,
  imageurl: 's',
  itemname: 's',
  meta: 's',
  shopname: 's',
  itemcaptions: 's',
  itemprice: 2,
};
type Props = {
  isindex?: boolean;
  className?: string;
};

const Threecards: FC<Props> = ({ isindex = false, className }) => {
  useEffect(() => {
    Fetchproductindex()
      .then((data) => console.log(data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Segment>
      <Card.Group itemPerRow={3} stackable className={className}>
        {isindex ? (
          <>
            <Indexcards products={[products]} />
          </>
        ) : (
          <Ranking rankings={[rankings]} />
        )}
      </Card.Group>
    </Segment>
  );
};

export default Threecards;
