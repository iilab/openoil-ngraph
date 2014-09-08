module.exports = function (node, ctx) {
    ctx.lineStyle(0);
    ctx.beginFill(node.color);
    var x = node.pos.x - node.width/2,
        y = node.pos.y - node.width/2;

    ctx.drawRect(x, y, node.width, node.width);
  }