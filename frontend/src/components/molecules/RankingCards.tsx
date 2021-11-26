import { FC } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import IndexCards from 'components/atoms/IndexCards';
import { Product } from 'model/index';
import { motion } from 'framer-motion';
import { list } from 'constant/index';

const RankingCards: FC<{ state: Product[] }> = ({ state = [] }) => (
  <>
    <Segment>
      <motion.div initial="hidden" animate="visible" variants={list}>
        <Card.Group itemsPerRow={3} stackable centered>
          <IndexCards products={state} isrank />
        </Card.Group>
      </motion.div>
    </Segment>
  </>
);

export default RankingCards;
