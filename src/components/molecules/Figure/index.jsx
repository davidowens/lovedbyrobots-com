import React from 'react';

const Figure = ({ image }) => (
  <figure>
    <img
      src={`https:${image.fields.picture.fields.file.url}?w=1600&h=900&fit=fill`}
      alt={image.fields.picture.fields.description}
    />
    <figcaption>
      <a
        href={image.fields.attributionUrl}
      >
        {image.fields.attributionName}
      </a>
    </figcaption>
  </figure>
);

/** @component */
export default Figure;
