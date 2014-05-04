'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
	Note = mongoose.model('Note'),
	_ = require('lodash');

/**
 * Create a Note
 */
exports.create = function(req, res) {
	var note = new Note(req.body);
	note.user = req.user;

	note.save(function(err) {
		if (err) {
			return res.send('users/signup', {
				errors: err.errors,
				note: note
			});
		} else {
			res.jsonp(note);
		}
	});
};

/**
 * Show the current Note
 */
exports.read = function(req, res) {
	res.jsonp(req.note);
};

/**
 * Update a Note
 */
exports.update = function(req, res) {
	var note = req.note;

	note = _.extend(note, req.body);

	note.save(function(err) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(note);
		}
	});
};

/**
 * Delete an Note
 */
exports.delete = function(req, res) {
	var note = req.note;

	note.remove(function(err) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(note);
		}
	});
};

/**
 * List of Notes
 */
exports.list = function(req, res) {
	Note.find().sort('-created').populate('user', 'displayName').exec(function(err, notes) {
		if (err) {
			res.render('error', {
				status: 500
			});
		} else {
			res.jsonp(notes);
		}
	});
};

/**
 * Note middleware
 */
exports.noteByID = function(req, res, next, id) {
	Note.findById(id).populate('user', 'displayName').exec(function(err, note) {
		if (err) return next(err);
		if (!note) return next(new Error('Failed to load Note ' + id));
		req.note = note;
		next();
	});
};

/**
 * Note authorization middleware
 */
exports.hasAuthorization = function(req, res, next) {
	if (req.note.user.id !== req.user.id) {
		return res.send(403, 'User is not authorized');
	}
	next();
};