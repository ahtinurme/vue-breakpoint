const nodeExternals = require('webpack-node-externals')

module.exports = {
  chainWebpack: (config) => {
    // https://stackoverflow.com/a/45820235/4106263
    config.externals(nodeExternals({ importType: 'umd' }))
  },
  pluginOptions: {
    jestSerializer: {
      removeComments: true,
    },
  },
}
