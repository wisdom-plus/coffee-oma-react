import { FC, RefObject } from 'react';
import { Card, Segment, Visibility, Loader, Ref } from 'semantic-ui-react';
import IndexCards from 'components/atoms/IndexCards';
import { ProductInfinite } from 'model/index';
import { motion } from 'framer-motion';
import { list } from 'constant/index';
import { FetchNextPageOptions, InfiniteQueryObserverResult } from 'react-query';
import RailTop from 'components/atoms/RailTop';

const ThreeCards: FC<{
  products: ProductInfinite[] | undefined;
  fetchNext: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<ProductInfinite, unknown>>;
  isFetch: boolean;
  Railref: RefObject<HTMLElement>;
}> = ({ products = [], fetchNext, isFetch, Railref }) => (
  <Ref innerRef={Railref}>
    <Segment style={{ marginTop: '4em', padding: '3em' }}>
      <motion.div initial="hidden" animate="visible" variants={list}>
        <motion.div
          className="thumbnails"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          <Visibility onBottomVisible={() => fetchNext()}>
            <Card.Group itemsPerRow={3} stackable centered>
              <IndexCards products={products} />
            </Card.Group>
          </Visibility>
          {isFetch && (
            <Loader active inline="centered" size="large">
              Loading...
            </Loader>
          )}
          {!products[products.length - 1]?.nextpage && (
            <Segment
              content="全てのアイテムを読み込みました。"
              textAlign="center"
              size="big"
            />
          )}
        </motion.div>
      </motion.div>
      <RailTop Railref={Railref} />
    </Segment>
  </Ref>
);

export default ThreeCards;
