import { FC, useEffect } from 'react';
import { Route, Switch, useHistory, useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';
import TopMenu from 'components/organisms/Topmenu';
import Home from 'components/pages/Home';
import Product from 'components/pages/Product';
import Footer from 'components/organisms/Footer';
import Policy from 'components/templates/Policy';
import Registration from 'components/pages/Registration';
import NoRender from 'components/pages/NoRender';
import Session from 'components/pages/Session';
import { RecoilApp } from 'atom';

const App: FC = () => {
  const { hash, pathname } = useLocation();
  const { action } = useHistory();

  useEffect(() => {
    if (!hash || action !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [action, hash, pathname]);

  return (
    <RecoilApp>
      <TopMenu />
      <Container style={{ paddingTop: '60px', flex: '1' }}>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/sign_up">
            <Registration isnew />
          </Route>
          <Route exact path="/sign_in">
            <Session issignin />
          </Route>
          <Route exact path="/sign_out">
            <Session issignout />
          </Route>
          <Route exact path="/confirmation">
            <Session isconfirm />
          </Route>
          <Route exact path="/password_reset">
            <Session isreset />
          </Route>
          <Route exact path="/password_reset/edit">
            <Session isresetedit />
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
          <Route exact path="/product/:id(\d+)">
            <Product isshow />
          </Route>
          <Route exact path="/private_policy">
            <Policy isprivate />
          </Route>
          <Route exact path="/policy">
            <Policy />
          </Route>
          <Route exact path="/send_mail">
            <NoRender issendmail />
          </Route>
          <Route>
            <NoRender />
          </Route>
        </Switch>
      </Container>
      <Footer />
    </RecoilApp>
  );
};

export default App;
