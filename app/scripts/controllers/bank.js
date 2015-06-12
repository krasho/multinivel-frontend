(function () {

  angular.module('multinivel.BankController', [])
    .controller('BankController',['$scope', 'bankService', function ($scope, bankService) {

      bankService.all().then(function(data){
         $scope.banks = data;
      })

      /*$scope.banks = [];

      $scope.bank = {
         name : "Bancomer"
      }

      $scope.bank2= {
         name : "HSBC"
      }

      $scope.banks.push($scope.bank);
      $scope.banks.push($scope.bank2);
      */
    }])
})();
