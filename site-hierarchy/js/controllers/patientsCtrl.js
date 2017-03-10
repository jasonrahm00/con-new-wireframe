angular.module('conWireframe').controller('patientsCtrl', function ($scope, clinicFactory) {

  'use strict';
  
  //gMaps Fiddle: http://jsfiddle.net/Wijmo/Rqcsj/

  $scope.selectedClinic = clinicFactory.selected;
  $scope.clinics = clinicFactory.locations;
  
  $scope.selectClinic = function(clinic) {
    clinicFactory.selectClinic(clinic);
  };
  
});