(function(){
   'use strict';
   angular.module('multinivel.userSessionService',[])
      .factory('userSessionService', ['$http','CookieHandlerService', function($http, CookieHandlerService){

      function authentication(authInfo) {
          $http.post('http://api.multinivel.dev/sessions', authInfo)
          .success(function(data){
            //CookieHandlerService.set(data.user);
          })
            .error(function(){
                //do something
          });
      }


      return {
        authentication : authentication
      }

      }]);
})();
