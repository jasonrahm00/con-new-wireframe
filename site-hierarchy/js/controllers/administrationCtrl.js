angular.module('conWireframe').controller('administrationCtrl', function ($scope, $q, adminFactory) {
  
  'use strict';

  adminFactory.getAllTeams().then(function() {
    $scope.allTeams = adminFactory.allTeams;
    console.log($scope.allTeams);
  });
    
});