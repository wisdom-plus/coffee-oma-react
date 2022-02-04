import { FC, useEffect, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router';
import { Container } from 'semantic-ui-react';
import TopMenu from 'components/organisms/TopMenu';
import Home from 'components/pages/Home';
import Product from 'components/pages/Product';
import Footer from 'components/organisms/Footer';
import Policy from 'components/templates/Policy';
import Registration from 'components/pages/Registration';
import NoRender from 'components/pages/NoRender';
import Session from 'components/pages/Session';
import { RecoilApp } from 'atom/RecoilApp';
import FlashMessage from 'container/display/EnhancedFlashMessage';
import ErrorBoundary from 'error/ErrorBoundary';
import LoaderGrid from 'error/LoaderGrid';
import { AnimatePresence } from 'framer-motion';
import { LocationState } from 'components/atoms/FlashMessage';
import ProductRank from 'components/templates/ProductRank';
import ProductIndex from 'components/templates/ProductIndex';
import ProductShow from 'container/fetch/EnhancedProductShow';

import ProductNew from 'components/templates/ProductNew';

const App: FC = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  useEffect(() => {
    if (location.hash !== 'POP') {
      window.scrollTo(0, 0);
    }
  }, [location]);

  return (
    <ErrorBoundary statusMessages={{ 401: 'ログイン情報が正しくありません。' }}>
      <Suspense fallback={<LoaderGrid />}>
        <RecoilApp>
          <TopMenu />
          <Container style={{ paddingTop: '60px', flex: '1' }}>
            {state && (
              <FlashMessage message={state.message} type={state.type} />
            )}
            <AnimatePresence exitBeforeEnter initial={false}>
              <Routes key={location.pathname} location={location}>
                <Route path="/" element={<Home />} />
                <Route path="sign_up" element={<Registration isnew />} />
                <Route path="sign_in" element={<Session issignin />} />
                <Route path="sign_out" element={<Session issignout />} />
                <Route path="confirmation" element={<Session isconfirm />} />
                <Route path="password_reset" element={<Session isreset />} />
                <Route
                  path="password_reset/edit"
                  element={<Session isresetedit />}
                />
                <Route
                  path="registration/edit"
                  element={<Registration isedit />}
                />
                <Route path="mypage" element={<Registration ismypage />} />
                <Route
                  path="registration/:id"
                  element={<Registration isshow />}
                />

                <Route path="products" element={<Product />}>
                  <Route path="" element={<ProductIndex />} />
                  <Route path="new" element={<ProductNew />} />
                  <Route path="ranking" element={<ProductRank />} />
                  <Route path=":id" element={<ProductShow />} />
                </Route>
                <Route path="private_policy" element={<Policy isprivate />} />
                <Route path="policy" element={<Policy />} />
                <Route path="send_mail" element={<NoRender issendmail />} />
                <Route path="*" element={<NoRender />} />
              </Routes>
            </AnimatePresence>
          </Container>
          <Footer />
        </RecoilApp>
      </Suspense>
    </ErrorBoundary>
  );
};

export default App;
