import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';

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

  renderArtcleType = () => {
    const { contentType } = this.props;
    switch (contentType) {
      // case 'idea':
      //   return <Idea {...this.props} />;
      default:
        return <Idea {...this.props} />;
    }
  }

  render() {
    const { createdAt, title, introduction, images, match: { url, params: { slug } } } = this.props;
    if (!createdAt) return null;
    return (
      <Fragment>
        {slug && (
          <Helmet>
            <title>Loved by Robots | { title } </title>
            {/* <meta name="description" content="Helmet application" /> */}

            <meta property="og:type" content="article" />
            <meta property="og:title" content={ title } />
            <meta property="og:url" content={`https://lovedbyrobots.com${url}`} />
            <meta property="og:description" content={introduction} />
            <meta property="og:image" content={`https:${images[0].fields.picture.fields.file.url}`} />
          </Helmet>
        )}
        { this.renderArtcleType() }
      </Fragment>
    );
  }
}

export default Article;
