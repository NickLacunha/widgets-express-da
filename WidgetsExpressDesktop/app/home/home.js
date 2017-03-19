'use strict';

angular.module('desktopApp.home', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeControl'
  });
}])

.controller('HomeControl', [function() {

}]);