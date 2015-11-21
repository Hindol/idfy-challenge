'use strict';

angular.module('status-hub.api', ['ngResource'])

.factory("Member", function($resource) {
    return $resource(
        'https://idfy.0x10.info/api/idfy-status',
        {
            'type': 'json',
            'query': 'list_member',
            'page': '@page'
        }
    );
})

.factory("EthnicGroups", function() {
    return {
        1: 'Indian',
        2: 'African Americans',
        3: 'Asian Americans',
        4: 'European',
        5: 'British',
        6: 'Jewish',
        7: 'Latino',
        8: 'Native American',
        9: 'Arabic'
    };
});
