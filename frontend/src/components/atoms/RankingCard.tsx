import { FC } from 'react';
import { Card, Icon, Image, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { Product } from 'model/index';
import { motion } from 'framer-motion';
import { item, transition, frameVariants, Variants } from 'constant/index';

type Props = {
  products: Product[] | undefined;
};
const Extra: FC<{ price: number }> = ({ price }) => (
  <Icon name="yen sign">{price.toLocaleString()}</Icon>
);

const RankingCard: FC<Props> = ({ products }) => (
  <Card.Group itemsPerRow={3} stackable centered>
    {products?.map((product, index) => (
      <motion.div
        key={product.id}
        variants={Variants}
        style={{ margin: '0.875em 1em' }}
        className="thumbnail"
      >
        <motion.div variants={item}>
          <motion.div
            className="frame"
            whileHover="hover"
            variants={frameVariants}
            transition={transition}
          >
            <Link to={`/products/${product.id}`} data-testid={product.id}>
              <Card>
                <Label color="teal" attached="top left" size="small">
                  <Icon name="chess queen" style={{ fontSize: '1.3em' }} />
                  {index + 1}
                </Label>

                <Image src={product.image?.url} />
                <Card.Content>
                  <Card.Header>{product.name}</Card.Header>
                  <Card.Meta>
                    <span>Brand: {product.shopname}</span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                  <Extra price={product.price} />
                </Card.Content>
              </Card>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>
    ))}
  </Card.Group>
);

export default RankingCard;
