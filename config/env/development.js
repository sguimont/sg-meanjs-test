'use strict';

module.exports = {
    db: 'mongodb://localhost/mean-dev',
    app: {
        title: 'MEAN.JS - Development Environment'
    },
    facebook: {
        clientID: '614210848665340',
        clientSecret: '62f00b95d1f39f9451fa1a07ea6f244e',
        callbackURL: 'http://localhost:3000/auth/facebook/callback'
    },
    twitter: {
        clientID: 'yGd3x11myRit5UURow',
        clientSecret: '2I4HYFPTkKlFBvW2WC6hJQdKaMexmCeKBgoqzOmBkQ',
        callbackURL: 'http://localhost:3000/auth/twitter/callback'
    },
    google: {
        clientID: '96428798247.apps.googleusercontent.com',
        clientSecret: 'lIKXqHEIhzZVzwT04Tn4-v8p',
        callbackURL: 'http://localhost:3000/auth/google/callback'
    },
    linkedin: {
        clientID: 'xjxxypjoelfg',
        clientSecret: 'wWhWKIneQvL0HwcU',
        callbackURL: 'http://localhost:3000/auth/linkedin/callback'
    }
};