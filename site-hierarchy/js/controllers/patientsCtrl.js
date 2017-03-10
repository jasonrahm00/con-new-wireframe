angular.module('conWireframe').controller('patientsCtrl', function ($scope, $window, clinicFactory) {

  'use strict';
  
  //gMaps Fiddle: http://jsfiddle.net/Wijmo/Rqcsj/

  $scope.selectedClinic = clinicFactory.selected;
  $scope.clinics = clinicFactory.locations;
  
  $scope.selectClinic = function(clinic) {
    clinicFactory.selectClinic(clinic);
  };
  
  $window.map = new google.maps.Map(document.getElementById('mapContainer'), {
    center: {
      lat: 39.7392,
      lng: -104.9903
    },
    zoom: 8
  });
  
});