angular.module('conWireframe').controller('facultyCtrl', function ($scope, $q, facultyFactory) {
  
  'use strict';

  $scope.teacher = facultyFactory.chosenFaculty;

  facultyFactory.getAllFaculty().then(function() {
    $scope.allFaculty = facultyFactory.allFaculty;
    console.log($scope.teacher);
  });
  
  $scope.setTeacher = function(person) {
    facultyFactory.choseFaculty(person)
  }

});