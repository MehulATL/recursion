var stringifyJSON = function (obj) {

  var isUndefinedOrAFunction = function(obj){
    return typeof(obj) === 'undefined' || typeof(obj) === 'function';
  };

  if(Array.isArray(obj)){
    var resultingArray = [];
    for (var i = 0; i < obj.length; i++){
      resultingArray.push(stringifyJSON(obj[i]));
    }
    return '[' + resultingArray.join(',') + ']';
  }

  if(Object.prototype.toString.call(obj) === "[object Object]"){
    var array = [];
    for (var key in obj){
      if(!isUndefinedOrAFunction(obj[key])){
        array.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + array.join(',') + '}';
  }

  if(typeof(obj) === 'string'){
    return '"' + obj + '"';
  }else if (!isUndefinedOrAFunction(obj)){
    return String(obj); 
  }

};
