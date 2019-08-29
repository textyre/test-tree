/* eslint-disable no-param-reassign */
const rewireAliases = require('react-app-rewire-aliases')
const { paths } = require('react-app-rewired')
const path = require('path')

module.exports = function override(config, env) {
	config = rewireAliases.aliasesOptions({
		'@assets': path.resolve(__dirname, 'public/'),
		'@shared': path.resolve(__dirname, `${paths.appSrc}/shared/`),
		'@features': path.resolve(__dirname, `${paths.appSrc}/features/`),
		'@store': path.resolve(__dirname, `${paths.appSrc}/store.js`),
	})(config, env)

	config.module.rules = [
		...config.module.rules,
		{
			test: /\.module\.scss$/,
			use: ['sass-loader'],
		},
		{
			test: /\.(js|mjs|jsx|ts|tsx)$/,
			use: [
				{
					loader: 'astroturf/loader',
					options: { extension: '.module.scss' },
				},
			],
		},
	]

	return config
}
