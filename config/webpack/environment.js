const { environment } = require('@rails/webpacker')
const erb = require('./loaders/erb')

const webpack = require('webpack')
// const interact = require('interactjs')
environment.plugins.append('Provide', new webpack.ProvidePlugin({
  $: 'jquery',
  jQuery: 'jquery',
  'window.jQuery': 'jquery',
  Popper: ['popper.js', 'default']
}))

environment.loaders.append('expose', {
    test: require.resolve('jquery'),
    rules: [
      {
        test: require.resolve('jquery'),
        loader: 'expose-loader',
        options: {
          // For `underscore` library, it can be `_.map map` or `_.map|map`
          exposes: 'jquery',
        },
      },
    ],
})

const aliasConfig = {
    'jquery': 'jquery-ui-dist/external/jquery/jquery.js',
    'jquery-ui': 'jquery-ui-dist/jquery-ui.js'
};

environment.config.set('resolve.alias', aliasConfig);
environment.loaders.prepend('erb', erb)
module.exports = environment
