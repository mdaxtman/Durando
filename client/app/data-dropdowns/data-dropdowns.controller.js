'use strict';

angular.module('DropDowns', ['dataModule'])

.controller('DropDownController', function($scope, DataItems, DataBrands, DataCategories, DataItemTactics) {
  $scope.all = 'All';
  $scope.categories = DataCategories.getCategoryData(); 
  $scope.selectedCategory = $scope.categories;
  $scope.brands = DataBrands.getBrandData();
  $scope.selectedBrand = $scope.brands;
  $scope.items = DataItems.getItemData();
  $scope.selectedItem = $scope.items;
  $scope.tactics = DataItemTactics.getItemTacticData();
  $scope.selectedTactic = $scope.tactics;
  
});



