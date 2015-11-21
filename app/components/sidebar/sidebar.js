'use strict';

angular.module('status-hub.sidebar', [
    'status-hub.api'
])

.controller('SidebarController', ['EthnicGroups', function(EthnicGroups) {
    var vm = this;

    vm.ethnicGroups = EthnicGroups;
}]);
