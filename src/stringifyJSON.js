var stringifyJSON = function (obj) {

  if(typeof(obj) === 'string'){
  	return '"' + obj + '"';
  }

  if((typeof(obj) === 'number') || (typeof(obj) === 'boolean') || (typeof(obj) === null)){
  	return = String(obj);
  }

  if((typeof(obj) === undefined) || (typeof(obj) === 'function')){
    return = '';
  }

  if(Array.isArray(obj)){
    var resultingArray = [];
    for (var i = 0; i < obj.length; i++){
      resultingArray.push(stringifyJSON(obj[i]));
    });
    return '[' + resultingArray.join(',') + ']';
  }

  if(Object.prototype.toString.call(obj) === "[object Object]"){
    var resultingArray = [];
    for (var key in obj){
      if((typeof(obj[key]) === undefined) || (typeof(obj[key]) === 'function')){
        return = '{}';
      }else{
        resultingArray.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
      }
    }
    return '{' + resultingArray.join(',') + '}';
  }
};
