(function () {
  'use strict';
  angular.module('multinivel.MainController', [])
    .controller('MainController',['$rootScope', function ($rootScope) {

      $rootScope.signOut = function() {
         alert("Entre");
      }
    }]);
})();
