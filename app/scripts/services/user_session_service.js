(function(){
   'use strict';
   angular.module('multinivel.userSessionService',[])
      .factory('userSessionService', ['$http','CookieHandlerService', function($http, CookieHandlerService){

      function authentication(authInfo) {
          $http.post('http://api.multinivel.dev/sessions', {session:authInfo})
          .success(function(data){
            CookieHandlerService.set(data.user);
          })
          .error(function(){
             //console.log("Entre aqui");
             //$scope.error = "Connection Error";
          });
      }


      return {
        authentication : authentication
      }

      }]);
})();
