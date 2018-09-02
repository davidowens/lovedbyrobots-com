import React, { PureComponent } from 'react';

import Idea from '../../molecules/Idea';

class Article extends PureComponent {
  static defaultProps = {
    match: {
      params: {
        contentType: null,
        slug: null,
      }
    }
  };

  componentDidMount() {
    const {
      id,
      slug,
      contentType,
      createdAt,
      fetchArticleById,
      fetchArticleBySlug,
      match: {
        params: {
          contentType: paramsContentType,
          slug: paramsSlug,
        }
      }
    } = this.props;
    if (createdAt) return;
    if (id) {
      fetchArticleById({
        'sys.id': id
      });
    } else if ((contentType || paramsContentType) && (slug || paramsSlug)) {
      fetchArticleBySlug({
        content_type: contentType || paramsContentType,
        'fields.slug': slug || paramsSlug,
      });
    }
  }

  render() {
    const { contentType } = this.props;
    if (!contentType) return null;

    switch (contentType) {
      // case 'idea':
      //   return <Idea {...this.props} />;
      default:
        return <Idea {...this.props} />;
    }
  }
}

export default Article;
