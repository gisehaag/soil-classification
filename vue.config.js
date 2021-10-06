//vue.config.js
module.exports = {
	chainWebpack: config => {
		config
			.plugin('html')
			.tap(args => {
				args[0].title = "Clasificación de Suelos para uso ingenieril";
				return args;
			})
	}
}