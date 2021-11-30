import { FC } from 'react';
import { Card, Segment, Button } from 'semantic-ui-react';
import IndexCards from 'components/atoms/IndexCards';
import { ProductInfinite } from 'model/index';
import { motion } from 'framer-motion';
import { list } from 'constant/index';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';

const ThreeCards: FC<{
  products: ProductInfinite[] | undefined;
  fetchNext: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<ProductInfinite, unknown>>;
}> = ({ products = [], fetchNext }) => (
  <Segment style={{ marginTop: '4em', padding: '3em' }}>
    <motion.div initial="hidden" animate="visible" variants={list}>
      <motion.div
        className="thumbnails"
        initial="initial"
        animate="enter"
        exit="exit"
        variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
      >
        <Card.Group itemsPerRow={3} stackable centered>
          <IndexCards products={products} />
        </Card.Group>
        {fetchNext && (
          <Button onClick={() => fetchNext()} color="teal" content="next" />
        )}
      </motion.div>
    </motion.div>
  </Segment>
);

export default ThreeCards;
