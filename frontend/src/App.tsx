import { VFC, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';
import TopMenu from 'components/organisms/Topmenu';
import Home from 'components/pages/Home';
import Product from 'components/pages/Product';
import Footer from 'components/organisms/Footer';
import Policy from 'components/templates/Policy';
import Registration from 'components/pages/Registration';

const App: VFC = () => {
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  return (
    <>
      <TopMenu />
      <Container style={{ paddingTop: '60px', flex: '1' }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign_up">
            <Registration isnew />
          </Route>
          <Route exact path="/registation/edit">
            <Registration isedit />
          </Route>
          <Route exact path="/registation/:id(\d+)">
            <Registration isshow />
          </Route>
          <Route exact path="/products">
            <Product isindex />
          </Route>
          <Route exact path="/product/new">
            <Product isnew />
          </Route>
          <Route path="/product/:id(\d+)">
            <Product isshow />
          </Route>
          <Route path="/private_policy">
            <Policy isprivate />
          </Route>
          <Route path="/policy">
            <Policy />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </>
  );
};

export default App;
