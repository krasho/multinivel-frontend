(function(){
   angular.module('multinivel.BankService',[])
      .factory('bankService', ['$http', '$q', function($http, $q){

         // get all banks
         function all() {
            var deferred = $q.defer();
            $http.get('http://localhost:3000/banks.json')
               .success(function(data) {
                  deferred.resolve(data);
               });

            return deferred.promise
         }

         return {
            all : all
         }

      }])

})();
