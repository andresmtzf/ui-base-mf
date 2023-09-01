const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react-ts')
const autoprefixer = require('autoprefixer')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'ui',
    projectName: 'contacts-unuhi',
    webpackConfigEnv,
    argv,
  })

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
    module: {
      rules: [
        {
          test: /\.(scss)$/,
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' },
            { loader: 'postcss-loader', options: { postcssOptions: { plugins: [autoprefixer] } } },
            { loader: 'sass-loader' },
          ],
        },
      ],
    },
  })
}
