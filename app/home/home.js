'use strict';

angular.module('status-hub.home', ['ngRoute', 'status-hub.api'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'homeCtrl'
  });
}])

.controller('homeCtrl', ['Member', function(Member) {
    var vm = this;

    Member.get(function(json) {
        vm.members = json["members"];
        console.log(vm);
    });
}]);
