module.exports = {
	target: 'static',
	ssr: false,
	modules: [
		'@nuxtjs/pwa',
	],
	buildModules: [
		'@nuxtjs/vuetify',
	],
	server: {
		host: '0',
		port: 3000
	},
	pwa: {
		manifest: {
			lang: "ru",
			name: 'My Awesome App',
			useWebmanifestExtension: false,
			display: 'minimal-ui',
			orientation: 'portrait',
			background_color: '#FFFFFF',
			theme_color: '#F8F8F8'
		},
		workbox: {
			/*dev: true,*/
			importScripts: [
				'db-sw.js'
			],
			runtimeCaching: [
				{
					urlPattern: 'https://fonts.googleapis.com/.*',
					handler: 'cacheFirst',
					method: 'GET',
					strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
				},
				{
					urlPattern: 'https://fonts.gstatic.com/.*',
					handler: 'cacheFirst',
					method: 'GET',
					strategyOptions: {cacheableResponse: {statuses: [0, 200]}}
				},
			]

		}
	},
	serverMiddleware: [
		//'~/api'
	],
	router: {
		base: '/test.pwa/'
	}
};