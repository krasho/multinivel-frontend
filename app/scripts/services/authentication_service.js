(function(){
   'use strict';
   angular.module('multinivel.AuthenticationService',[])
      .factory('AuthenticationService', function($auth){


      var auth = {
             isLogged: false,
             isAdmin: false,
             check: function() {
                 if($auth && $auth.getToken()){
                     this.isLogged = true;
                     var auth = $auth.getPayload();
                     console.log($auth.getPayload());
                     //this.isAdmin = auth.user.isAdmin == 1 ? true : false
                 } else {
                     this.isLogged = false;
                     this.isAdmin = false;
                 }
             }
         };

      return auth;

      });

})();
