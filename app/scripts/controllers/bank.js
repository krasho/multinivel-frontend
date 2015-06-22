(function () {
  'use strict';
  angular.module('multinivel.BankController', [])
    .controller('BankController',['$scope', '$location', 'bankService', function ($scope, $location, bankService) {

      $scope.all = function() {
         bankService.all().then(function(data){
            $scope.banks = data.banks;
         });

      }

      $scope.editBank = function (bankId) {
         $location.path('/bank/' + bankId);
      };

    }])

    .controller('BankDetailController', ['$scope', '$routeParams', '$location', 'bankService', function ($scope, $routeParams, $location, bankService) {
        var id = $routeParams.id;
        $scope.findById = function() {
           bankService.findById(id).then(function(data){
               $scope.bank = data;
           });
        };


        $scope.updateBank = function() {
           alert("entre a guardar");
        }

    }]);
})();
