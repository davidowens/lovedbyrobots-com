import React, { PureComponent } from 'react';

import Article from '../../../containers/organisms/Article';

class ArticlesList extends PureComponent {
  componentWillMount() {
    this.props.fetchArticles();
  }

  renderArticles = (articles) => articles.map((article) => {
    return (
      <Article
        key={article.getIn(['sys', 'id'])}
        id={article.getIn(['sys', 'id'])}
      />
    );
  });

  render() {
    const { articles } = this.props;
    return articles && articles.size > 0
      ? this.renderArticles(articles)
      : null
  }
}

export default ArticlesList;
