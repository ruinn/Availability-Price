module.exports = {
    entry: __dirname + '/client/src/index.jsx',
    module: {
      rules: [
        {
          test: [/\.jsx$/],
          exclude: /node_modules/,
          loader: 'babel-loader',
          query: {
            presets: ['env', 'react'],
            // plugins: ["babel-plugin-styled-components"]
          }
        }
      ]
    },
     output: {
      filename: 'bundle.js',
      path: __dirname + '/public'
    }
};
