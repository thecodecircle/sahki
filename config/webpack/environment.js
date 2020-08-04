const { environment } = require('@rails/webpacker')
const erb = require('./loaders/erb')

const webpack = require('webpack')

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


environment.loaders.prepend('erb', erb)
module.exports = environment
