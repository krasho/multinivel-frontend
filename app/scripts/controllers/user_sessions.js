(function () {
  'use strict';
  angular.module('multinivel.UserSessionsController', [])
    .controller('UserSessionsController',['$rootScope','$scope', '$auth', '$location', 'localStorageService','userSessionService', function ($rootScope, $scope, $auth, $location, localStorageService, userSessionService) {

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
               $rootScope.user = response.data.auth_token;

               if(localStorageService.isSupported) {
                  //Guardado de las variables
                  localStorageService.set("email", response.data.email);
                  localStorageService.set("id", response.data.id);
               }


               $location.path("/private");

           })
           .catch(function(response) {  // Si ha habido errores, llegaremos a esta función
               $scope.error = response.data.errors;
           });
      }

    }])
})();
