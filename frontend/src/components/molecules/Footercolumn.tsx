import { FC } from 'react';
import { Grid } from 'semantic-ui-react';
import MenuLogo from 'components/atoms/MenuLogo';
import FooterList from 'components/atoms/FooterList';

type Listtype = {
  id: number;
  content: string;
  url: string;
};

const Footercolumn: FC<{ List: Listtype[]; List2: Listtype[] }> = ({
  List = [{ id: 1, content: 'error', url: '/' }],
  List2 = [{ id: 2, content: 'error', url: '/' }],
}) => (
  <Grid stackable inverted divided columns="equal">
    <Grid.Column width={3}>
      <MenuLogo />
    </Grid.Column>
    <Grid.Column width={3}>
      <FooterList links={List} />
    </Grid.Column>
    <Grid.Column width={3}>
      <FooterList links={List2} />
    </Grid.Column>
  </Grid>
);

export default Footercolumn;
