'use strict';

angular.module('status-hub.api', ['ngResource'])

.factory("Member", function($resource) {
    return $resource("https://idfy.0x10.info/api/idfy-status?type=json&query=list_member&page=1");
});
