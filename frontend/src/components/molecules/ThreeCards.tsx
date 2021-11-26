import { FC } from 'react';
import { Card, Segment } from 'semantic-ui-react';
import IndexCards from 'components/atoms/IndexCards';
import { Product } from 'model/index';
import { motion } from 'framer-motion';
import { list } from 'constant/index';

const ThreeCards: FC<{ state: Product[] }> = ({ state = [] }) => (
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
          <IndexCards products={state} />
        </Card.Group>
      </motion.div>
    </motion.div>
  </Segment>
);

export default ThreeCards;
