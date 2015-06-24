(function(){
'use strict';
var app = angular.module('multinivel', [
   'ngRoute',
   'multinivel.BankController',
   'multinivel.BankService',
   'multinivel.transformRequestAsFormPost'
   ]);

   app.config(['$routeProvider', function ($routeProvider) {

     $routeProvider
        .when('/', {
            templateUrl: 'views/banks/index.html',
            controller : 'BankController',
        })

        .when('/banks', {
            templateUrl: 'views/banks/index.html',
            controller : 'BankController',
        })

        .when('/bank/:id', {
            templateUrl: 'views/banks/update-bank.html',
            controller : 'BankDetailController',
        })

        .otherwise({
            redirectTo: '/'
        });


   }]);

})();
