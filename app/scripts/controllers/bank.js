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
         $location.path('/bank/edit/' + bankId);
      };

      $scope.createBank = function () {
         $location.path('/banks/new');
      };

      $scope.deleteBank = function (bankId) {
         $location.path('/banks/delete/'+bankId);
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
           var id = $routeParams.id;
           bankService.updateBank(id, $scope.bank.name).then(function(data){
               $location.path('/banks');

           });
        }

        $scope.createBank = function() {
           bankService.createBank($scope.bank.name).then(function(data){
               $location.path('/banks');

           });
        }

        $scope.deleteBank = function() {
           bankService.deleteBank($scope.bank.id).then(function(data){
               $location.path('/banks');

           });
        }


    }]);
})();
