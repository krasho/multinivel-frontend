(function(){
'use strict';
var app = angular.module('multinivel', [
   'ngRoute',
   'satellizer',
   'LocalStorageModule',
   'multinivel.MainController',
   'multinivel.BankController',
   'multinivel.BankService',
   'multinivel.UserSessionsController',
   'multinivel.userSessionService',
   'multinivel.AuthenticationService',
   ]);

   app.config(['$routeProvider', function ($routeProvider) {
     $routeProvider
        .when('/', {
            controller : 'MainController',
            access:{
              requiredLogin: false,
              userShouldBeAdmin: false
            }

        })

        .when('/banks', {
            templateUrl: 'views/banks/index.html',
            controller : 'BankController',
            access:{
              requiredLogin: true,
              userShouldBeAdmin: false
            }
        })

        .when('/banks/new', {
            templateUrl: 'views/banks/create-bank.html',
            controller : 'BankDetailController',
            access:{
              requiredLogin: true,
              userShouldBeAdmin: false
            }

        })

        .when('/bank/edit/:id', {
            templateUrl: 'views/banks/update-bank.html',
            controller : 'BankDetailController',
            access:{
              requiredLogin: true,
              userShouldBeAdmin: false
            }

        })


        .when('/bank/delete/:id', {
            templateUrl: 'views/banks/delete-bank.html',
            controller : 'BankDetailController',
            access:{
              requiredLogin: true,
              userShouldBeAdmin: false
            }

        })

        .when('/sign_in', {
          templateUrl: 'views/user_sessions/new.html',
          controller: 'UserSessionsController',
          access:{
              requiredLogin: true,
              userShouldBeAdmin: false
          }
        })

        .when('/private', {
            templateUrl: 'views/private/index.html',
            controller : 'MainController',
            access:{
              requiredLogin: true,
              userShouldBeAdmin: false
            }

        })


        .otherwise({
            access:{
              requiredLogin: false,
              userShouldBeAdmin: false
            },

            redirectTo: '/'
        });


   }]);

  app.config(function($authProvider) {
        // Parametros de configuración
        $authProvider.loginUrl = "http://api.multinivel.dev/sessions";
        $authProvider.signupUrl = "http://api.multinivel.dev/signup";
        $authProvider.tokenRoot = false; // set the token parent element if the token is not the JSON root
        $authProvider.tokenName = "auth_token";
        $authProvider.tokenPrefix = "multinivel";
  });


   app.config(['$httpProvider', 'satellizer.config', function($httpProvider, config) {
      $httpProvider.interceptors.push(['$q', function($q) {
        var tokenName = config.tokenPrefix ? config.tokenPrefix + '_' + config.tokenName : config.tokenName;
        return {
          request: function(httpConfig) {
            var token = localStorage.getItem(tokenName);
            if (token && config.httpInterceptor) {
              token = config.authHeader === 'Authorization' ?  token : token;

              httpConfig.headers[config.authHeader] = token;
            }
            return httpConfig;
          },
          responseError: function(response) {
            return $q.reject(response);
          }
        };
      }]);
  }]);

  app.config(function (localStorageServiceProvider) {
     localStorageServiceProvider
       .setPrefix('multinivel')
       .setStorageType('localStorage')
       .setNotify(true, true)
   });


   app.run(
      // Funnción para mandar a la página de loggeo si no hay sessión
     function($rootScope, $location, $auth, localStorageService, AuthenticationService){
         // Si se refresca la página, se checa la autenticación
         AuthenticationService.check();

         // Verificamos si puede acceder a la siguiente ruta
         $rootScope.$on("$routeChangeStart", function(event, nextRoute, currentRoute) {
             //console.log(nextRoute);

             // Verificamos que este loggeado, si no, lo mandamos a loggearse
             if(nextRoute.$$route.access.requiredLogin && !AuthenticationService.isLogged) {
                 $location.path('/sign_in');
             }

             // Verificamos que este en el perfil adecuado para entrar
             //if(nextRoute.access.userShouldBeAdmin && !Autenticacion.isAdmin) {
             //    $location.path('/');
            // }
         });
     }
    );



})();
