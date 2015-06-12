(function () {
  angular.module('multinivelFrontendApp', [])
    .directive('banks', function () {
      return {
        restrict: 'E',
        templateUrl: '/views/banks/index.html'
      };
    })
})();
