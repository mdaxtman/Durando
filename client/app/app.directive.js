'use strict';

angular.module('retailDashboardApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ui.router',
  'ui.bootstrap',
  'DropDowns'
])
  .directive('topBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'components/navbar/navbar.html'
    };
  })
  .directive('dropDowns', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/data-dropdowns/data-dropdowns.html'
    };
  })
  .directive('mainChart', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/main-chart.html'
    };
  })
  .directive('sideBar', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/side-bar.html'
    };
  })
  .directive('bottomChart', function() {
    return {
      restrict: 'E',
      templateUrl: 'app/bottom-chart.html'
    };
  });
