(function(){
   'use strict';
   angular.module('multinivel.CookieHandlerService',[])
      .factory('CookieHandlerService', ['$cookieStore', function($cookieStore){

        var user = null;
        var CookieHandler = {
            set: function(user){
                $cookieStore.put('currentUser', user);
            },

            get: function(){
                return $cookieStore.get('currentUser');
            },

            delete: function(user){
                $cookieStore.remove('currentUser');
            }
        };

        return CookieHandler;

      }]);
})();
