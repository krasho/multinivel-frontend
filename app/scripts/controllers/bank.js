(function () {
  'use strict';
  angular.module('multinivel.BankController', [])
    .controller('BankController',['$scope', 'bankService', function ($scope, bankService) {

      bankService.all().then(function(data){
         $scope.banks = data.banks;
      });
    }]);
})();
