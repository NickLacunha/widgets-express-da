'use strict';

angular.module('desktopApp.orders', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/orders', {
    templateUrl: 'orders/orders.html',
    controller: 'ordersControl'
  });
}])

.controller('ordersControl', [function() {

}]);