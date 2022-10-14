// const { entry } = require('./webpack.config');

module.exports = {
	// Next.js 옵션
	nextConfig: {
		reactStrictMode: false,
		swcMinify: true,
	},
	// Webpack 5 버전 사용
	future: {
		webpack5: true,
	},
	// webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
	// 	// Important: return the modified config
	// 	return config;
	// },
};
