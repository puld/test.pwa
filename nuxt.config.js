module.exports = {
	target: 'static',
	ssr: false,
	modules: [
		'@nuxtjs/pwa',
		['nuxt-twa-module', {
			/* module options */
			defaultUrl: 'https://your-url.com',
			hostName: 'your-url.com',
			applicationId: 'com.example.example',
			launcherName: 'Your app name',
			versionCode: 1,
			versionName: '1.0',
			statusBarColor: '#F8F8F8',
			// The sha256Fingerprints by is an array with one SHA-256 key string.
			// But if you have multiple you can add them to the array. More information about the website asociation:
			// https://developer.android.com/training/app-links/verify-site-associations#web-assoc
			sha256Fingerprints: ['/* your SHA-256 keys */'],
			/* optional */
			/* overwrite default location for icon */
			iconPath: '/static/icon.png',
			/* Overwrite folder where to put .wellknown */
			distFolder: '.nuxt/dist/client',
		}],
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
	]
};