# Open Oil

Create data file.

curl -d @ngraph_cypher.json -H accept:application/json -H content-type:application/json http://localhost:7474/db/data/cypher | json data | json 0 | json 0 > ngraph_results.json 

Compile

npm start

# Fabric.js and ngraph

This folder shows how to use [`ngraph.fabric`](https://github.com/anvaka/ngraph.fabric) as
a graph rendering engine.

[![rendered from node.js](https://raw2.github.com/anvaka/ngraph.fabric/master/example/node.js/outGraph.png)](http://anvaka.github.io/ngraph/examples/fabric.js/Node%20and%20Browser/index.html)

NB: Image above was [rendered from Node.js](https://github.com/anvaka/ngraph/tree/master/examples/fabric.js/Node%20and%20Browser).
Click on the image to see interactive version rendered by the same code in your browser.
