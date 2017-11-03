angular.module('conWireframe').directive('decisionTree', function(d3Service){
  
  //indent tree directive refactor source
    //https://bl.ocks.org/mbostock/1093025
  
  //Collapse all nodes on page load
    //http://bl.ocks.org/larskotthoff/7022289
  
  return {
    restrict: 'E',
    scope: {},
    link: function(scope, element, attrs) {
      d3Service.d3().then(function(d3) {

        var margin = {top: 30, right: 20, bottom: 30, left: 20},
            width = 960 - margin.left - margin.right,
            barHeight = 40,
            barWidth = width * .8;

        var i = 0,
            duration = 400,
            root;

        var tree = d3.layout.tree()
            .nodeSize([0, 40]);

        var svg = d3.select("decision-tree").append("svg")
            .attr("width", width + margin.left + margin.right)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        //Collapse all nodes under root on page load
          //https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd
        function collapse(node) {
          if(node.children) {
            node._children = node.children
            node._children.forEach(collapse)
            node.children = null
          }
        }
        
        d3.json("/js/data/tree.json", function(error, data) {
          if (error) throw error;
          data.x0 = 0;
          data.y0 = 0;
          data.children.forEach(collapse);
          update(root = data);
        });

        function update(source) {

          // Compute the flattened node list. TODO use d3.layout.hierarchy.
          var nodes = tree.nodes(root);
          
          var height = Math.max(500, nodes.length * barHeight + margin.top + margin.bottom);

          d3.select("svg").transition()
              .duration(duration)
              .attr("height", height);

          d3.select(self.frameElement).transition()
              .duration(duration)
              .style("height", height + "px");

          // Compute the "layout".
          nodes.forEach(function(n, i) {
            n.x = i * barHeight;
          });

          // Update the nodes…
          var node = svg.selectAll("g.node")
              .data(nodes, function(d) { return d.id || (d.id = ++i); });

          var nodeEnter = node.enter().append("g")
              .attr("class", "node")
              .attr("transform", function(d) { return "translate(" + source.y0 + "," + source.x0 + ")"; })
              .style("opacity", 1e-6);

          // Enter any new nodes at the parent's previous position.
          nodeEnter.append("rect")
              .attr("y", -barHeight / 2)
              .attr("height", barHeight)
              .attr("width", barWidth)
              .style("fill", color)
              .on("click", click);

          nodeEnter.append("text")
              .attr("dy", 3.5)
              .attr("dx", 5.5)
              .text(function(d) { return d.name; });

          // Transition nodes to their new position.
          nodeEnter.transition()
              .duration(duration)
              .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
              .style("opacity", 1);

          node.transition()
              .duration(duration)
              .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; })
              .style("opacity", 1)
              .select("rect")
              .style("fill", color);

          // Transition exiting nodes to the parent's new position.
          node.exit().transition()
              .duration(duration)
              .attr("transform", function(d) { return "translate(" + source.y + "," + source.x + ")"; })
              .style("opacity", 1e-6)
              .remove();

          // Update the links…
          var link = svg.selectAll("path.link")
              .data(tree.links(nodes), function(d) { return d.target.id; });
          
          // Stash the old positions for transition.
          nodes.forEach(function(d) {
            d.x0 = d.x;
            d.y0 = d.y;
          });
        }

        // Toggle children on click.
        function click(d) {
          if (d.children) {
            d._children = d.children;
            d.children = null;
          } else {
            d.children = d._children;
            d._children = null;
          }
          update(d);
        }

        function color(d) {
          return d._children ? "#3182bd" : d.children ? "#c6dbef" : "#fd8d3c";
        }

      });
    }
  }
  
});