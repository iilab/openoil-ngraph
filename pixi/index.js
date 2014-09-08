module.exports.main = function () {
//  var graph = getGraphFromQueryString(window.location.search.substring(1));

// This collection is huge. Import concrete graph only
// to reduce amount of browserified package:

fs = require('fs');

var jsonParser = require('ngraph.serialization/json'),
    json_results = fs.readFileSync('../ngraph_results.json', 'utf8')

  var  graph = jsonParser.load(json_results);

  var createPixiGraphics = require('ngraph.pixi');

  var pixiGraphics = createPixiGraphics(graph, {
    background: 0xFFFFFF,

    physics: {
      springLength: 30,
      springCoeff: 0.0008,
      dragCoeff: 0.01,
      gravity: -1.2,
    }
  });

  // setup our custom looking nodes and links:
  pixiGraphics.createNodeUI(require('./lib/createNodeUI'))
    .renderNode(require('./lib/renderNode'))
    .createLinkUI(require('./lib/createLinkUI'))
    .renderLink(require('./lib/renderLink'));

  // just make sure first node does not move:
  var layout = pixiGraphics.layout;
  layout.pinNode(graph.getNode('bp_p_l_c'), true);

  // begin animation loop:
  pixiGraphics.run();
};

function getGraphFromQueryString(queryString) {
  var query = require('query-string').parse(queryString);
  var n = parseInt(query.n, 10) || 10;
  var m = parseInt(query.m, 10) || 10;

  var graphGenerators = require('ngraph.generators');
  var createGraph = graphGenerators[query.graph] || graphGenerators.grid;
  return createGraph(n, m);
}
