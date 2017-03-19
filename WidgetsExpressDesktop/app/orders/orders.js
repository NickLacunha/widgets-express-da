'use strict';

angular.module('desktopApp.orders', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orders', {
      templateUrl: 'common/nimp.html',
    controller: 'ordersControl'
  });
}])

.controller('ordersControl', [function() {
    this.name = "Order management page";
}]);