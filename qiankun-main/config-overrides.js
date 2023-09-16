module.exports = {
  webpack: (config) => {
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

      // Return your customised Webpack Development Server config.
      return config;
    };
  },
};