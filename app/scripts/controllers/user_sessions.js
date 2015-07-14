(function () {
  'use strict';
  angular.module('multinivel.UserSessionsController', [])
    .controller('UserSessionsController',['$rootScope','$scope', '$auth', '$location','userSessionService', function ($rootScope, $scope, $auth, $location, userSessionService) {

      $scope.handleRegBtnClick = function(authInfo) {

          $auth.login({
               session :{
                  email: authInfo.email,
                  password: authInfo.password
               }
           })
           .then(function(response) {
               // Si se ha registrado correctamente,
               // Podemos redirigirle a otra parte
               $rootScope.user = response.data.token;
               $location.path("/private");

           })
           .catch(function(response) {  // Si ha habido errores, llegaremos a esta función
               $scope.error = response.data.errors;
           });
      }

    }])
})();
