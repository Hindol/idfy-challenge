'use strict';

angular.module('status-hub.home.kilogram-filter', [])

.filter('kilogram', [function() {
    return function(input) {
        var gram = parseInt(input);
        var kilogram = gram / 1000;
        return String(kilogram.toFixed(1)) + " Kg";
    };
}]);
