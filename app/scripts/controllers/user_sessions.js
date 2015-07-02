(function () {
  'use strict';
  angular.module('multinivel.UserSessionsController', [])
    .controller('UserSessionsController',['$scope','userSessionService', function ($scope, userSessionService) {

      //If there is an error in the login
      $scope.$on('auth:login-error', function(ev, reason) {
         $scope.error = reason.errors[0];
      });


      $scope.handleRegBtnClick = function(authInfo) {
          userSessionService.authentication(authInfo);
      }

    }])
})();
