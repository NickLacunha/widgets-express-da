'use strict';

// Declare app level module which depends on views, and components
angular.module('desktopApp', [
  'ngRoute',
  'desktopApp.home',
  'desktopApp.customers'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/home'});
}]);
