'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/mean',
	assets: {
		lib: {
			css: [
				'public/lib/bootstrap/dist/css/bootstrap.min.css',
				'public/lib/bootstrap/dist/css/bootstrap-theme.min.css'
			],
			js: [
				'public/lib/angular/angular.min.js',
				'public/lib/angular-resource/angular-resource.min.js',
				'public/lib/angular-animate/angular-animate.min.js',
				'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				'public/lib/angular-ui-utils/ui-utils.min.js',
				'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
                'public/lib/angular-translate/angular-translate.min.js',
                'public/lib/messageformat/messageformat.js',
                'public/lib/angular-translate-interpolation-messageformat/angular-translate-interpolation-messageformat.min.js',

            ]
		},
		css: 'public/dist/application.min.css',
		js: 'public/dist/application.min.js'
	},
    facebook: {
        clientID: process.env.FACEBOOK_ID || '614210848665340',
        clientSecret: process.env.FACEBOOK_SECRET || '62f00b95d1f39f9451fa1a07ea6f244e',
        callbackPath: '/auth/facebook/callback'
    },
    twitter: {
        clientID: process.env.TWITTER_KEY || 'yGd3x11myRit5UURow',
        clientSecret: process.env.TWITTER_SECRET || '2I4HYFPTkKlFBvW2WC6hJQdKaMexmCeKBgoqzOmBkQ',
        callbackPath: '/auth/twitter/callback'
    },
    google: {
        clientID: process.env.GOOGLE_ID || '96428798247.apps.googleusercontent.com',
        clientSecret: process.env.GOOGLE_SECRET || 'lIKXqHEIhzZVzwT04Tn4-v8p',
        callbackPath: '/auth/google/callback'
    },
    linkedin: {
        clientID: process.env.LINKEDIN_ID || 'xjxxypjoelfg',
        clientSecret: process.env.LINKEDIN_SECRET || 'wWhWKIneQvL0HwcU',
        callbackPath: '/auth/linkedin/callback'
    }
};
