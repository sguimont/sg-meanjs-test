'use strict';

var path = require('path'),
	rootPath = path.normalize(__dirname + '/../..');

module.exports = {
	app: {
		title: 'Test MEAN.JS',
		description: 'Test Mean.js Stack',
		keywords: 'sebastien guimont, test, mongodb, express, angularjs, node.js, mongoose, passport'
	},
	root: rootPath,
	port: process.env.PORT || 3000,
	templateEngine: 'swig',
	sessionSecret: 'My4Little$ecrets',
	sessionCollection: 'sessions'
};