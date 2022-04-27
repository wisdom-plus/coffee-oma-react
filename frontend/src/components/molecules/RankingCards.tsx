import { FC, RefObject } from 'react';
import { Segment, Ref } from 'semantic-ui-react';
import RankingCard from 'components/atoms/RankingCard';
import { Product } from 'model/index';
import { motion } from 'framer-motion';
import { list } from 'constant/index';
import RailTop from 'components/atoms/RailTop';

const RankingCards: FC<{
  state: Product[];
  Railref: RefObject<HTMLElement>;
}> = ({ state = [], Railref }) => (
  <Ref innerRef={Railref}>
    <Segment>
      <motion.div initial="hidden" animate="visible" variants={list}>
        <motion.div
          className="thumbnails"
          initial="initial"
          animate="enter"
          exit="exit"
          variants={{ exit: { transition: { staggerChildren: 0.1 } } }}
        >
          <RankingCard products={state} />
        </motion.div>
      </motion.div>
      <RailTop Railref={Railref} />
    </Segment>
  </Ref>
);

export default RankingCards;
