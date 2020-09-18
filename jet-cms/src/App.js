import { STATE_LOGIN, STATE_SIGNUP } from 'components/AuthForm';
import GAListener from 'components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from 'components/Layout';
import PageSpinner from 'components/PageSpinner';
import AuthPage from 'pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import './styles/reduction.scss';
import DashboardPage from 'pages/DashboardPage';
import Videos from 'pages/Videos/Videos';
import Category from 'pages/Category/Category';

// const DashboardPage = React.lazy(() => import('pages/DashboardPage'));
// const Videos = React.lazy(() => import('pages/Videos/Videos'));

class App extends React.Component {
  render() {
    return (
      <HashRouter>
        <GAListener>
          <Switch>
            <LayoutRoute
              exact
              path="/login"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_LOGIN} />
              )}
            />
            <LayoutRoute
              exact
              path="/signup"
              layout={EmptyLayout}
              component={props => (
                <AuthPage {...props} authState={STATE_SIGNUP} />
              )}
            />

            <MainLayout breakpoint={this.props.breakpoint}>
              <React.Suspense fallback={<PageSpinner />}>
                <Route exact path="/analytics" component={DashboardPage} />
                <Route exact path="/videos" component={Videos} />
                <Route exact path="/categories" component={Category} />
              </React.Suspense>
            </MainLayout>
            <Redirect to="/analytics" />
          </Switch>
        </GAListener>
      </HashRouter>
    );
  }
}

const query = ({ width }) => {
  if (width < 575) {
    return { breakpoint: 'xs' };
  }

  if (576 < width && width < 767) {
    return { breakpoint: 'sm' };
  }

  if (768 < width && width < 991) {
    return { breakpoint: 'md' };
  }

  if (992 < width && width < 1199) {
    return { breakpoint: 'lg' };
  }

  if (width > 1200) {
    return { breakpoint: 'xl' };
  }

  return { breakpoint: 'xs' };
};

export default componentQueries(query)(App);
