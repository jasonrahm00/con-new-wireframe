angular.module('conWireframe').directive('decisionTree', function(d3Service){
  
  //indent tree directive refactor source
    //http://bl.ocks.org/larskotthoff/7022289

  return {
    restrict: 'E',
    scope: {},
    link: function() {
      d3Service.d3().then(function(d3) {

        var w = 1080,
            i = 0,
            barHeight = 40,
            barWidth = w * .75,
            duration = 400,
            margin = {top: 30, bottom: 30},
            root;

        var tree = d3.layout.tree()
            .size([0, 40]);

        var vis = d3.select("decision-tree").append("svg:svg")
            .attr("width", w)
            .append("svg:g")
            .attr("transform", "translate(20,30)");

        //Collapse all nodes under root on page load
          //https://bl.ocks.org/d3noob/43a860bc0024792f8803bba8ca0d5ecd
        function collapse(node) {
          if(node.children) {
            node._children = node.children
            node._children.forEach(collapse)
            node.children = null
          }
        }

        d3.json("/js/data/tree.json", function(json) {
          json.x0 = 0;
          json.y0 = 0;
          json.children.forEach(collapse);
          update(root = json);
        });

        function update(source) {

          // Compute the flattened node list. TODO use d3.layout.hierarchy.
          var nodes = tree.nodes(root);
          
          var height = Math.max(500, nodes.length * barHeight + margin.top + margin.bottom);
          
          d3.select("svg").transition()
              .duration(duration)
              .attr("height", height);

          // Compute the "layout"
          nodes.forEach(function(n, i) {
            n.x = i * barHeight;
          });

          // Update the nodes…
          var node = vis.selectAll("g.node")
              .data(nodes, function(d) { return d.id || (d.id = ++i); });

          var nodeEnter = node.enter().append("svg:g")
              .attr("class", "node")
              .attr("transform", function() { return "translate(" + source.y0 + "," + source.x0 + ")"; })
              .style("opacity", 1e-6);

          // Enter any new nodes at the parent's previous position.
          nodeEnter.append("svg:rect")
              .attr("y", -barHeight / 2)
              .attr("height", barHeight)
              .attr("width", barWidth)
              .style("fill", color)
              .on("click", click);

          nodeEnter.append("svg:text")
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
              .attr("transform", function() { return "translate(" + source.y + "," + source.x + ")"; })
              .style("opacity", 1e-6)
              .remove();

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