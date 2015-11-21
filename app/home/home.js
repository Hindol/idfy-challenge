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

    vm.pageChanged = function() {
        Member.get({page: vm.currentPage}, function(json) {
            vm.members = json.members;
        });
    }

    vm.currentPage = 1;
    vm.pageChanged();

    vm.ethnicGroups = EthnicGroups;
}]);
