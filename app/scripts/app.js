(function(){
var app = angular.module('multinivel', [
   'ngRoute',
   'multinivel.BankController'
   ]);

   app.config(['$routeProvider', function ($routeProvider) {

     $routeProvider
        .when('/', {
            templateUrl: 'views/banks/index.html',
            controller : 'BankController',
            controllerAs: 'BankCtrl'
        })
   }])

})();
