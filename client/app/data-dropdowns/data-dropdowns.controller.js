'use strict';

angular.module('DropDowns', ['dataModule'])

.controller('DropDownController', function($scope, DataCategories) {
  $scope.categories = DataCategories.getCategoryData(); 
});



