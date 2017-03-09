angular.module('conWireframe').controller('patientsCtrl', function ($scope, dataFactory) {
  
  'use strict';
  
  $scope.clinics;
  
  dataFactory.getData('clinics')
    .then(function(response) {
      $scope.clinics = response.data.sort(function (a,b) {
        return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0);
      });
    }, function(error) {
      console.log(error.message);
  });
  
});