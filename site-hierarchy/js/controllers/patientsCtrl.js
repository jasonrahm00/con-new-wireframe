angular.module('conWireframe').controller('patientsCtrl', function ($scope, dataFactory, clinicFactory) {

  'use strict';
  
  //gMaps Fiddle: http://jsfiddle.net/Wijmo/Rqcsj/

  $scope.clinics = clinicFactory.locations;
  
});