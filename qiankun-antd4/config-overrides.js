const { name } = require('./package');

module.exports = {
  webpack: (config) => {
    config.output.library = `${name}-[name]`;
    config.output.libraryTarget = 'umd';
    config.output.chunkLoadingGlobal = `webpackJsonp_${name}`;
    config.output.globalObject = 'window';

    config.externals = {
      antd: 'antd',
      react: 'React',
      'react-dom': 'ReactDOM',
    };

    return config;
  },

  devServer: (configFunction) => {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.open = false;
      config.hot = false;
      config.historyApiFallback = true;
      // config.watchContentBase = false;
      config.liveReload = false;
      config.headers = {
        'Access-Control-Allow-Origin': '*',
      };

      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};