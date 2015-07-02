(function(){
'use strict';
var app = angular.module('multinivel', [
   'ngRoute',
   'ng-token-auth',
   'ngCookies',
   'multinivel.BankController',
   'multinivel.BankService',
   'multinivel.UserSessionsController',
   'multinivel.userSessionService',
   'multinivel.CookieHandlerService',
   ]);

   app.config(['$routeProvider', function ($routeProvider) {
     $routeProvider
        .when('/', {
            //templateUrl: 'views/index.html',
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

        .when('/sign_in', {
                templateUrl: 'views/user_sessions/new.html',
                controller: 'UserSessionsController'
        })


        .otherwise({
            redirectTo: '/'
        });


   }]);


  //To redirect after login
  app.run(['$rootScope', '$location', function($rootScope, $location) {
    $rootScope.$on('auth:login-success', function() {
      $location.path('/');
    });
  }]);


})();
