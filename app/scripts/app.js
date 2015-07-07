(function(){
'use strict';
var app = angular.module('multinivel', [
   'ngRoute',
   'satellizer',
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

  app.config(function($authProvider) {
        // Parametros de configuración
        $authProvider.loginUrl = "http://api.multinivel.dev/sessions";
        $authProvider.signupUrl = "http://api.multinivel.dev/signup";
        $authProvider.tokenName = "token";
        $authProvider.tokenPrefix = "multinivel";
  });

app.run(
      // Funnción para mandar a la página de loggeo si no hay sessión
     function($rootScope, $location, Autenticacion){
         // Si se refresca la página, se checa la autenticación
         Autenticacion.check();

         // Verificamos si puede acceder a la siguiente ruta
         $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
             // Verificamos que este loggeado, si no, lo mandamos a loggearse
             if(nextRoute.access.requiredLogin && !Autenticacion.isLogged) {
                 $location.path('/signin');
             }

             // Verificamos que este en el perfil adecuado para entrar
             if(nextRoute.access.userShouldBeAdmin && !Autenticacion.isAdmin) {
                 $location.path('/');
             }
         });
     }
    );

})();
