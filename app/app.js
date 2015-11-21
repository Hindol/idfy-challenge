'use strict';

// Declare app level module which depends on views, and components
angular.module('status-hub', [
  'ngRoute',
  'status-hub.home',
  'status-hub.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/home'});
}]);
