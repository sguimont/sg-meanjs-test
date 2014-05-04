'use strict';

module.exports = function(app) {
	var users = require('../../app/controllers/users');
	var notes = require('../../app/controllers/notes');

	// Notes Routes
	app.get('/notes', notes.list);
	app.post('/notes', users.requiresLogin, notes.create);
	app.get('/notes/:noteId', notes.read);
	app.put('/notes/:noteId', users.requiresLogin, notes.hasAuthorization, notes.update);
	app.del('/notes/:noteId', users.requiresLogin, notes.hasAuthorization, notes.delete);

	// Finish by binding the Note middleware
	app.param('noteId', notes.noteByID);
};