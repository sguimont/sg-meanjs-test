'use strict';

// Notes controller
angular.module('notes').controller('NotesController', ['$scope', '$stateParams', '$location', 'Authentication', 'Notes',
    function($scope, $stateParams, $location, Authentication, Notes) {
        $scope.authentication = Authentication;

        $scope.sendForm = function() {
            alert('form valid, sending request...');
        };

        // Create new Note
        $scope.create = function() {
        	// Create new Note object
            var note = new Notes({
                name: this.name
            });

            // Redirect after save
            note.$save(function(response) {
                $location.path('notes/' + response._id);
            });

            // Clear form fields
            this.name = '';
        };

        // Remove existing Note
        $scope.remove = function(note) {
            if (note) {
                note.$remove();

                for (var i in $scope.notes) {
                    if ($scope.notes[i] === note) {
                        $scope.notes.splice(i, 1);
                    }
                }
            } else {
                $scope.note.$remove(function() {
                    $location.path('notes');
                });
            }
        };

        // Update existing Note
        $scope.update = function() {
            var note = $scope.note;

            note.$update(function() {
                $location.path('notes/' + note._id);
            });
        };

        // Find a list of Notes
        $scope.find = function() {
            Notes.query(function(notes) {
                $scope.notes = notes;
            });
        };

        // Find existing Note
        $scope.findOne = function() {
            Notes.get({
                noteId: $stateParams.noteId
            }, function(note) {
                $scope.note = note;
            });
        };
    }
]);