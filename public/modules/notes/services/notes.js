'use strict';

//Notes service used to communicate Notes REST endpoints
angular.module('notes').factory('Notes', ['$resource', function($resource) {
    return $resource('notes/:noteId', {
        noteId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);