import React, { PureComponent, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';

import history from '../history';

import LatestArticles from '../containers/organisms/LatestArticles';
import Article from '../containers/organisms/Article';

import PageLayout from '../components/layout/PageLayout';
import PageHeader from '../components/molecules/PageHeader';
import PageMainContent from '../components/molecules/PageMainContent';
import PageFooter from '../components/molecules/PageFooter';

class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <PageLayout>
        <Router history={history}>
          <Fragment>
            <PageHeader />
            {/* <SiteNav /> */}
            <PageMainContent>
              <Switch>
                <Route exact path="/" component={LatestArticles} />
                <Route exact path="/:year/:month/:contentType/:slug" component={Article} />
              </Switch>
              </PageMainContent>
            <PageFooter/>
          </Fragment>
        </Router>
      </PageLayout>
    );
  }
}

export default App;
