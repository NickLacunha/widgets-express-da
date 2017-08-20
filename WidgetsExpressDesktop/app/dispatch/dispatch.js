'use strict';

angular.module('desktopApp.dispatch', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/dispatch', {
    templateUrl: 'dispatch/dispatch.html',
    controller: 'dispatchControl'
  });
}])

.controller('dispatchControl', [function() {

}]);