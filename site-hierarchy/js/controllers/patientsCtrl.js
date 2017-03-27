angular.module('conWireframe').controller('patientsCtrl', function ($scope, $q, $window, clinicFactory) {

  'use strict';

  $scope.selectedClinic = clinicFactory.selected;
  $scope.clinicsLoaded = false;
  $scope.selectClinic = function(clinic) {
    clinicFactory.selectClinic(clinic);
  };
  
  //returns an array of services for each location to be iterated over in the view
  $scope.getServices = function(clinic) {
    return clinicFactory.getServices(clinic);
  };

  clinicFactory.getClinics().then(function() {
    $scope.clinics = clinicFactory.locations;
    $scope.clinicsLoaded = true;
  });
  
  /******************************* Map *******************************/
  //gMaps Fiddle: http://jsfiddle.net/Wijmo/Rqcsj/
  
//  $scope.loadMap = function() {
//    $window.map = new google.maps.Map(document.getElementById('mapContainer'), {
//      center: {
//        lat: 39.7392,
//        lng: -104.9903
//      },
//      zoom: 10
//    });
//  };
  
});