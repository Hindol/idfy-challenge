'use strict';

angular.module('status-hub.home', [
    'ngRoute',
    'status-hub.api',
    'status-hub.home.kilogram-filter'
])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeController',
    controllerAs: 'home'
  });
}])

.controller('HomeController', ['Member', 'EthnicGroups', function(Member, EthnicGroups) {
    var vm = this;

    Member.get({page: 1}, function(json) {
        vm.members = json.members;
    });

    vm.ethnicGroups = EthnicGroups;
}]);
