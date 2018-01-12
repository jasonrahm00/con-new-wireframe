angular.module('conWireframe').controller('mainCtrl', function ($scope, $window) {
  
  'use strict';

  //Creates breadcrumb string array based on current URL
    //Used in index file to auto-generate breadcrumb links
      //Only works if view state name is same as matching URL string slice
  $scope.$watch(function() {
    return location.hash
  }, function(value) {
    $scope.breadcrumbLinks = value.split('/').splice(1, value.length);
  });

});