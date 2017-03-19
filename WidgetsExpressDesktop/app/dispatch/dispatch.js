'use strict';

angular.module('desktopApp.dispatch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dispatch', {
      templateUrl: 'common/nimp.html',
    controller: 'dispatchControl'
  });
}])

.controller('dispatchControl', [function() {
    this.name = "Dispatch control panel";
}]);