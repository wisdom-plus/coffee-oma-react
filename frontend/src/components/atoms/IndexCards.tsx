import React, { FC } from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { ProductInfinite } from 'model/index';
import { motion } from 'framer-motion';
import { item, transition, frameVariants, Variants } from 'constant/index';

type Props = {
  products: ProductInfinite[] | undefined;
};
const Extra: FC<{ price: number }> = ({ price }) => (
  <Icon name="yen sign">{price.toLocaleString()}</Icon>
);

const IndexCards: FC<Props> = ({ products }) => (
  <>
    {products?.map((page) => (
      <React.Fragment key={page.pages}>
        {page.data.map((product) => (
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
      </React.Fragment>
    ))}
  </>
);

export default IndexCards;
