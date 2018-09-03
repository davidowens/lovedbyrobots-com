import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format as dateFnsFormat } from 'date-fns';

import Figure from '../Figure';
import Markdown from '../../../vendor/react-remarkable';

import PostBody from '../../atoms/PostBody';
import H2 from '../../atoms/typography/H2';

const Article = styled.article`
  figure {
    margin-bottom: 1rem;
  }

  img {
    width: calc(100% + 4rem);
    margin-left: -2rem;
    margin-right: -2rem;
  }
`;

/** @component */

class Idea extends PureComponent {
  renderImages = images => images.map(image => (
    <Figure
      key={image.sys.id}
      image={image}
    />
  ));

  render() {
    const { title, slug, images, body, location, tags, contentType, createdAt } = this.props;
    return (
      <Article>
        <H2>
          <Link to={`/${dateFnsFormat(createdAt, 'YYYY/MM')}/${contentType}/${slug}`}>
            {title}
          </Link>
        </H2>
        {images && this.renderImages(images)}
        <Markdown
          source={body}
          contentWrapper={PostBody}
        />
        <footer>
          <p>Time: { createdAt }</p>
          <p>Location:
            {' '}
            <a href={`https://www.openstreetmap.org/#map=10/${location.lat}/${location.lon}`}>
              {location.lat}, {location.lon}
            </a>
          </p>
          <p>Tags: {tags.join(', ')}</p>
        </footer>
      </Article>
    );
  }
}

export default Idea;
