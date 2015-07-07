(function(){
   'use strict';
   angular.module('multinivel.userSessionService',[])
      .factory('userSessionService', ['$q','$auth', '$location', function($q, $auth, $location){

      function authentication(authInfo) {
         var deferred = $q.defer();
         $auth.signup({
            session: {
               email: authInfo.email,
               password: authInfo.password
            }
          })
         .success(function(data) {
            deferred.resolve(data);
         })

         return deferred.promise;

          /*$http.post('http://api.multinivel.dev/sessions', {session:authInfo})
          .success(function(data){
            CookieHandlerService.set(data.user);
          })
          .error(function(){
             //console.log("Entre aqui");
             //$scope.error = "Connection Error";
          });
         */
      }


      return {
        authentication : authentication
      }

      }]);
})();
