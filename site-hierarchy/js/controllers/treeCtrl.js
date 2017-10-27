angular.module('conWireframe').controller('treeCtrl', function ($scope) {

  'use strict';
  
  //https://www.youtube.com/watch?v=iZ6MSHA4FMU
  
  var dataUrl = '/js/data/tree.json';
  
  var canvas = d3.select("#tree").append("svg")
    .attr("width", 500)
    .attr("height", 500)
    .append("g")
      .attr("transform", "translate(50, 50)");
  
  var tree = d3.layout.tree()
    .size([400, 400]);

  d3.json("/js/data/tree.json", function(data) {
    
    var nodes = tree.nodes(data);
    var links = tree.links(nodes);
    
    var node = canvas.selectAll(".node")
      .data(nodes)
      .enter()
      .append("g")
        .attr("class", "node")
        .attr("transform", function(d) { return "translate(" + d.x + "," + d.y + ")";})
    
    node.append("circle")
      .attr("r", 5)
      .attr("fill", "steelblue");
    
    node.append("text")
      .text(function(d) {return d.name});
    
    canvas.selectAll(".link")
      .data(links)
      .enter()
      .append("path")
      .attr("class", "link")
      .attr("fill", "node")
      .attr("stroke", "#adadad")
      .attr("d", diagonal);
  })
  
});