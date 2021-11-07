import { FC } from 'react';
import HomeTop from 'components/templates/HometTop';
import { Helmet } from 'react-helmet';

const Home: FC = () => (
  <>
    <Helmet title="coffe-oma" />
    <HomeTop />
  </>
);

export default Home;
