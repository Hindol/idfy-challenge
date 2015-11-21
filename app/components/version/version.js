'use strict';

angular.module('status-hub.version', [
  'status-hub.version.interpolate-filter',
  'status-hub.version.version-directive'
])

.value('version', '0.1');
