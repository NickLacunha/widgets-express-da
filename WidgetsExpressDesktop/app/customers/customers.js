'use strict';

angular.module('desktopApp.customers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customers', {
      templateUrl: 'common/nimp.html',
    controller: 'customersControl'
  });
}])

.controller('customersControl', [function() {
    this.name = "Customer managment page";
}]);