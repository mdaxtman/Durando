'use strict';

angular.module('DropDowns', ['dataModule'])

.controller('DropDownController', function($scope, DataItems, DataBrands, DataCategories) {
  $scope.categories = DataCategories.getCategoryData(); 
  $scope.brands = DataBrands.getBrandData();
  $scope.items = DataItems.getItemData();
});



