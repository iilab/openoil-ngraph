module.exports = function (link, ctx) {
    ctx.lineStyle(1, link.color);
    ctx.moveTo(link.from.x, link.from.y);
    ctx.lineTo(link.to.x, link.to.y);
  }