'use strict';

angular.module('desktopApp.customers', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/customers', {
    templateUrl: 'customers/customers.html',
    controller: 'customersControl'
  });
}])

.controller('customersControl', [function() {

}]);