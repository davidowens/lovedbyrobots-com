import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { format as dateFnsFormat } from 'date-fns';

import Markdown from '../../../vendor/react-remarkable';

import PostBody from '../../atoms/PostBody';
import H2 from '../../atoms/typography/H2';

const Article = styled.article``;

/** @component */
export default ({ title, slug, body, location, tags, contentType, createdAt }) => (
  <Article>
    <H2>
      <Link to={`/${dateFnsFormat(createdAt, 'YYYY/MM')}/${contentType}/${slug}`}>
        {title}
      </Link>
    </H2>
    <Markdown
      source={body}
      contentWrapper={PostBody}
    />
    <footer>
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
