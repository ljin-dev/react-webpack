//~!  createRenderTo.js

module.exports = {
  createRenderTo: function (id) {
    id = id || 'renderTo';
    var node = document.createElement('div');
    node.setAttribute('id', id);
    document.body.appendChild(node);
    console.log("RenderTo created.");
    return node;
  }
};