'use strict';

/**
 * @ngdoc function
 * @name multinivelFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the multinivelFrontendApp
 */
angular.module('multinivelFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
