const { rewireWorkboxGenerate, defaultInjectConfig } = require('react-app-rewire-workbox');

module.exports = function override(config, env) {
  if (env === 'production') {
    console.log('Production build - Adding Workbox for PWAs');

    return rewireWorkboxGenerate({
      ...defaultInjectConfig,
      navigateFallback: '/index.html',
      navigateFallbackBlacklist: [
        new RegExp('styleguide'),
      ],
    })(config, env);
  }

  return config;
};
