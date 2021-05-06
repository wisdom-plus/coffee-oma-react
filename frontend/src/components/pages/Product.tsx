import { FC, useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Grid, Message } from 'semantic-ui-react';
import { useLocation } from 'react-router-dom';
import Productindex from 'components/templates/Productindex';
import Productnew from 'components/templates/Productnew';
import Productshow from 'components/templates/Productshow';

type Props = {
  isindex?: boolean;
  isshow?: boolean;
  isnew?: boolean;
};

type LocationState = {
  pathname: string;
  state: { message: string };
};

const Product: FC<Props> = ({ isindex, isshow, isnew }) => {
  const [state, setState] = useState({ visible: false });
  const location = useLocation<LocationState>();

  useEffect(() => location.state && setState({ visible: true }), [
    location.state,
  ]);

  return (
    <>
      <Helmet title="Product" />
      <Grid centered textAlign="center" padded verticalAlign="middle">
        <Grid.Column>
          {state.visible && (
            <Message success onDismiss={() => setState({ visible: false })}>
              <Message.Header
                className="ui center aligned"
                content="登録に成功しました"
              />
            </Message>
          )}
          {isindex && <Productindex />}
          {isshow && <Productshow />}
          {isnew && <Productnew />}
        </Grid.Column>
      </Grid>
    </>
  );
};

export default Product;
