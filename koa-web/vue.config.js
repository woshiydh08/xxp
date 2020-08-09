module.exports = {
	lintOnSave: false,
	productionSourceMap: false,
	devServer: {
		host: '0.0.0.0',
		hot: true,
		disableHostCheck: true,
	},
	css: {
		loaderOptions: {
			css: {},
			postcss: {
				plugins: [
					require('postcss-px2rem')({
						remUnit: 37.5, //px转换单位, 1rem等于37.5px的意思
					}),
				],
			},
		},
	},
}
