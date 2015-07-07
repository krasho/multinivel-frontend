(function () {
  'use strict';
  angular.module('multinivel.UserSessionsController', [])
    .controller('UserSessionsController',['$scope', '$auth', '$location','userSessionService', function ($scope, $auth, $location, userSessionService) {

      $scope.handleRegBtnClick = function(authInfo) {

          $auth.login({
               session :{
                  email: authInfo.email,
                  password: authInfo.password
               }
           })
           .then(function() {
              console.log("loggeado");
               // Si se ha registrado correctamente,
               // Podemos redirigirle a otra parte
               //$location.path("/private");
           })
           .catch(function(response) {
               console.log("error en el loggeado");
               // Si ha habido errores, llegaremos a esta función
           });
      }

    }])
})();
