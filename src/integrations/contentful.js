import { createClient } from 'contentful';
import config from '../config';

const client = createClient({
  space: config.contentfulSpaceId,
  environment: config.contentfulEnvironmentId,
  accessToken: config.contentfulAccessToken,
});

export default client;
