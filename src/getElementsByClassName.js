// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But in stead we're going to implement it from scratch:
var getElementsByClassName = function (className) {
  var elements = [];
  var currentNodes = document.body.childNodes;

  var findElements = function(nodes){
  	for (var i = 0; i < nodes.length; i++){
  	  var node = nodes[i];
  	  if (node.classList && node.classList.contains(className)){
  	  	elements.push(node);
  	  }
  	  if (node.hasChildNodes()){
  	  	findElements(node.childNodes);
  	  }
  	}
  };

  findElements(currentNodes);
  return elements;
};
