(function(){
'use strict';
var app = angular.module('multinivel', [
   'ngRoute',
   'devise',
   'multinivel.BankController',
   'multinivel.BankService',
   ]);

   app.config(['$routeProvider', function ($routeProvider) {

     $routeProvider
        .when('/', {
            templateUrl: 'views/index.html',
            //controller : 'BankController',
        })

        .when('/banks', {
            templateUrl: 'views/banks/index.html',
            controller : 'BankController',
        })

        .when('/banks/new', {
            templateUrl: 'views/banks/create-bank.html',
            controller : 'BankDetailController',
        })

        .when('/bank/edit/:id', {
            templateUrl: 'views/banks/update-bank.html',
            controller : 'BankDetailController',
        })


        .when('/bank/delete/:id', {
            templateUrl: 'views/banks/delete-bank.html',
            controller : 'BankDetailController',
        })



        .otherwise({
            redirectTo: '/'
        });


   }]);

})();
