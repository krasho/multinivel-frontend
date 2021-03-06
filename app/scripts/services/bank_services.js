(function(){
   'use strict';
   angular.module('multinivel.BankService',[])
      .factory('bankService', ['$http', '$q', function($http, $q){

         // get all banks
         function all() {
            var deferred = $q.defer();
            $http.get('http://api.multinivel.dev/banks')
               .success(function(data) {
                  deferred.resolve(data);
               });

            return deferred.promise;
         }

         function findById(id) {
            var deferred = $q.defer();
            $http.get('http://api.multinivel.dev/banks/'+id)

            .success(function(data) {
               deferred.resolve(data);
            });

            return deferred.promise;

         }

         function updateBank(id,name) {
            var deferred = $q.defer();

            var respuesta = $http({
                                   method: "put",
                                   url: 'http://api.multinivel.dev/banks/'+id,
                                   data: {
                                       _method : "put",
                                       id: id,
                                       name: name,
                                   }

            });

            respuesta.success(function(data) {
               deferred.resolve(data);
            });

            return deferred.promise;


         }

         function createBank(name) {
            var deferred = $q.defer();

            var respuesta = $http({
                                   method: "POST",
                                   url: 'http://api.multinivel.dev/banks',
                                   data: {
                                       _method : "POST",
                                       name: name,
                                   }

            });

            respuesta.success(function(data) {
               deferred.resolve(data);
            });

            return deferred.promise;


         }




         return {
            all : all,
            findById : findById,
            updateBank : updateBank,
            createBank : createBank,
         };

      }]);

})();
