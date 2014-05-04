'use strict';

angular.module('core').controller('HeaderController', ['$scope', 'Authentication',
    function ($scope, Authentication) {
        $scope.authentication = Authentication;
        $scope.isCollapsed = false;

        $scope.menu = [
            {
                title: 'Articles',
                link: 'articles',
                uiRoute: '/articles'
            },
            {
                title: 'New Article',
                link: 'articles/create',
                uiRoute: '/articles/create'
            },
            {
                title: 'Notes',
                link: 'notes',
                uiRoute: '/notes'
            },
            {
                title: 'New Note',
                link: 'notes/create',
                uiRoute: '/notes/create'
            }
        ];

        $scope.toggleCollapsibleMenu = function () {
            $scope.isCollapsed = !$scope.isCollapsed;
        };
    }
])
;