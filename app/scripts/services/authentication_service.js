(function(){
   'use strict';
   angular.module('multinivel.AuthenticationService',[])
      .factory('AuthenticationService',['$auth', '$rootScope','localStorageService', function($auth, $rootScope, localStorageService){


      var auth = {
             isLogged: false,
             isAdmin: false,
             check: function() {
                 if($auth && $auth.getToken()){
                     this.isLogged = true;


                   //Llenado de las variables de $rootScope del usuario loggeado
                   $rootScope.email = localStorageService.get("email");
                   $rootScope.id    = localStorageService.get("id");

                     //var auth = $auth.getPayload();
                     //console.log($auth.getPayload());
                     //this.isAdmin = auth.user.isAdmin == 1 ? true : false
                 } else {
                     this.isLogged = false;
                     this.isAdmin = false;
                 }
             }
         };

      return auth;

      }]);

})();
