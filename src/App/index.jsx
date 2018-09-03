import React, { PureComponent, Fragment } from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';

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
            <Helmet>
                <title>Loved by Robots</title>
                {/* <meta name="description" content="Helmet application" /> */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Loved by Robots" />
                <meta property="og:url" content="https://lovedbyrobots.com" />
                <meta property="og:description" content="Art, design and technology that robots love." />
                <meta property="og:image" content="https://images.ctfassets.net/6xw6vm1x0pny/12Rrctk02cKeAuQw8A0S2u/8b1f6e7ebed703fc2540cb16c71c9da2/bookcase-books-computers-1329068.jpg" />
            </Helmet>
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
