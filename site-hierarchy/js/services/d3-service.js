angular.module('conWireframe').service('d3Service', function($document, $q, $rootScope) {
  
  //create promise of D3
  var d = $q.defer();

  function onScriptLoad() {
    $rootScope.$apply(function() { d.resolve(window.d3); });
  }

  //Load D3 into the application
  var scriptTag = $document[0].createElement('script');
  scriptTag.type = 'text/javascript'; 
  scriptTag.async = true;
  scriptTag.src = 'https://d3js.org/d3.v3.min.js';

  scriptTag.onreadystatechange = function () {
    if (this.readyState == 'complete') onScriptLoad();
  }
  
  scriptTag.onload = onScriptLoad;

  var s = $document[0].getElementsByTagName('head')[0];
  s.appendChild(scriptTag);

  // return promise if d3 has loaded 
  this.d3 = function() { return d.promise; }
  
});