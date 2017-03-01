angular.module('conWireframe').directive('applyNow', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<span><a data-ng-if="!programChoice.name" href="" target="_blank">Apply Now</a><a data-ng-if="programChoice && programChoice.name !== \'PhD Program\'"href="https://nursingcas.liaisoncas.com/applicant-ux/#/login" target="_blank">Apply Now</a><a data-ng-if="programChoice && programChoice.name === \'PhD Program\'" href="https://soa.prod.cu.edu/degreeprog/applyDEGREEPROG_CUDEN/login.action" target="_blank">Apply Now</a></span>'
  };
  
});

angular.module('conWireframe').directive('admissionRequirements', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<span><a data-ng-if="!programChoice" data-ui-sref="program-admissions">View Requirements</a><a data-ng-if="programChoice" data-ui-sref="program-admissions" data-ng-click="setProgramChoice(programChoice)">View Requirements</a></span>'
  };
  
});

angular.module('conWireframe').directive('programPage', function(){
  
  return {
    restrict: 'E',
    replace: true,
    template: '<span><a data-ng-if="!programChoice" href="">Visit Program Page</a><a data-ng-if="programChoice" data-ui-sref="programChoice.url" data-ng-click="setProgramChoice(programChoice)">Visit Program Page</a></span>'
  };
  
});