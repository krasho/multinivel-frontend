(function () {

  angular.module('multinivelFrontendApp', [])
    .controller('BankCtrl', ['$scope', '$routeParams', 'bankService', function ($scope, $routeParams, pokemonService) {

      $scope.banks = [];
      $scope.bank  = {
         name: 'Bancomer'
      }


      $scope.banks.push($scope.bank);
    }])
})();
