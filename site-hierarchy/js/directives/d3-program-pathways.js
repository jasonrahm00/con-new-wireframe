angular.module('conWireframe').directive('programPathways', function(d3Service){
  
  //collapsible tree directive refactor source
    //https://bl.ocks.org/mbostock/4339083

  return {
    restrict: 'E',
    scope: {},
    link: function() {
      d3Service.d3().then(function(d3) {

        var margin = {top: 20, right: 120, bottom: 20, left: 120},
            width = 1080 - margin.right - margin.left,
            height = 1000 - margin.top - margin.bottom;

        var i = 0,
            duration = 750,
            root;

        var tree = d3.layout.tree()
            .size([height, width]);

        var diagonal = d3.svg.diagonal()
            .projection(function(d) { return [d.y, d.x]; });

        var svg = d3.select("program-pathways").append("svg")
            .attr("width", width + margin.right + margin.left)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.json("/js/data/program-pathways.json", function(error, flare) {
          if (error) throw error;

          root = flare;
          root.x0 = height / 2;
          root.y0 = 0;

          function collapse(d) {
            if (d.children) {
              d._children = d.children;
              d._children.forEach(collapse);
              d.children = null;
            }
          }

          root.children.forEach(collapse);
          update(root);
        });

        function update(source) {

          // Compute the new tree layout.
          var nodes = tree.nodes(root).reverse(),
              links = tree.links(nodes);

          // Normalize for fixed-depth.
          nodes.forEach(function(d) { d.y = d.depth * 180; });

          // Update the nodes…
          var node = svg.selectAll("g.node")
              .data(nodes, function(d) { return d.id || (d.id = ++i); });

          // Enter any new nodes at the parent's previous position.
          var nodeEnter = node.enter().append("g")
              .attr("class", "node")
              .attr("transform", function() { return "translate(" + source.y0 + "," + source.x0 + ")"; })
              .on("click", click);

          nodeEnter.append("circle")
              .attr("r", 1e-6)
              .style("fill", function(d) { return d._children ? "#cfbb7c" : "#fff"; });

          nodeEnter.append("text")
              .attr("x", function(d) { return d.children || d._children ? 0 : 20; })
              .attr("y", function(d) { return d.children || d._children ? "25px" : ".5em"; })
              .attr("text-anchor", function(d) { return d.children || d._children ? "middle" : "start"; })
              .style("fill-opacity", 1e-6)
              .text(function(d) { return d.name; }).call(getBB);
          
          nodeEnter.insert("rect", "text")
              .attr("x", function(d) { return d.bbox.x })
              .attr("y", function(d) { return d.bbox.y })
              .attr("height", function(d) { return d.bbox.height })
              .attr("width", function(d) { return d.bbox.width })
              .style("fill", "#fff");
            
          function getBB(selection) {
            selection.each(function(d) { d.bbox = this.getBBox(); })
          }

          // Transition nodes to their new position.
          var nodeUpdate = node.transition()
              .duration(duration)
              .attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")"; });

          nodeUpdate.select("circle")
              .attr("r", 10)
              .style("fill", function(d) { return d._children ? "#cfbb7c" : "#fff"; });

          nodeUpdate.select("text")
              .style("fill-opacity", 1);

          // Transition exiting nodes to the parent's new position.
          var nodeExit = node.exit().transition()
              .duration(duration)
              .attr("transform", function() { return "translate(" + source.y + "," + source.x + ")"; })
              .remove();

          nodeExit.select("circle")
              .attr("r", 1e-6);

          nodeExit.select("text")
              .style("fill-opacity", 1e-6);

          // Update the links…
          var link = svg.selectAll("path.link")
              .data(links, function(d) { return d.target.id; });

          // Enter any new links at the parent's previous position.
          link.enter().insert("path", "g")
              .attr("class", "link")
              .attr("d", function() {
                var o = {x: source.x0, y: source.y0};
                return diagonal({source: o, target: o});
              });

          // Transition links to their new position.
          link.transition()
              .duration(duration)
              .attr("d", diagonal);

          // Transition exiting nodes to the parent's new position.
          link.exit().transition()
              .duration(duration)
              .attr("d", function() {
                var o = {x: source.x, y: source.y};
                return diagonal({source: o, target: o});
              })
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

      });
    }
  }
  
});