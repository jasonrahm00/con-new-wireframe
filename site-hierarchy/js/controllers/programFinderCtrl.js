angular.module('conWireframe').controller('programFinderCtrl', function ($scope, programFactory) {
  
  'use strict';
  
  //Faceted Filtering
    //http://jsfiddle.net/rzgWr/19/
      //input filters elements dynamically created from object
  
  var uniqueItems = function (data, key) {
    var result = [];
    
    for (var i = 0; i < data.length; i++) {
      var value = data[i][key];

      if (result.indexOf(value) == -1) {
        result.push(value);
      }
    
    }
    return result;
  };
  
  $scope.useType = {};
  $scope.useFormat = {};
  
  $scope.$watch(function () {
      return {
          programs: $scope.programs,
          useType: $scope.useType,
          useFormat: $scope.useFormat
      }
  }, function (value) {
      var selected;
      
      $scope.count = function (prop, value) {
        return function (el) {
          return el[prop] == value;
        };
      };
      
      $scope.typeGroup = uniqueItems($scope.programs, 'type');
      var filterAfterType = [];        
      selected = false;
      for (var j in $scope.programs) {
          var p = $scope.programs[j];
          for (var i in $scope.useType) {
              if ($scope.useType[i]) {
                  selected = true;
                  if (i == p.type) {
                      filterAfterType.push(p);
                      break;
                  }
              }
          }        
      }
      if (!selected) {
          filterAfterType = $scope.programs;
      }

      $scope.formatGroup = uniqueItems($scope.programs, 'format');
      var filterAfterFormat = [];        
      selected = false;
      for (var j in filterAfterType) {
          var p = filterAfterType[j];
          for (var i in $scope.useFormat) {
              if ($scope.useFormat[i]) {
                  selected = true;
                  if (i == p.format) {
                      filterAfterFormat.push(p);
                      break;
                  }
              }
          }       
      }
      if (!selected) {
          filterAfterFormat = filterAfterType;
      }

      $scope.filteredPrograms = filterAfterFormat;        
  }, true);  

});