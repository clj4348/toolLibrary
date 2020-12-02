Array.prototype.myFilter = function(fn){
  if(typeof fn != 'function'){
    return 
  }
  var arr = this;
  var newArray = []
  for(var i = 0; i < arr.length; i++){
    var result = fn.call(this, arr[i], i);
    if(result) newArray.push(arr[i])
  }
  return newArray
}
Array.prototype.myMap = function(fn){
  if(typeof fn != 'function'){
    return 
  }
  var arr = this;
  var newArray = []
  for(var i = 0; i < arr.length; i++){
    var result = fn.call(this, arr[i], i);
  }
  return newArray
}
Array.prototype.mySome = function(fn){
  if(typeof fn != 'function'){
    return 
  }
  var arr = this;
  var flag = false;
  for(var i = 0; i < arr.length; i++){
    var result = fn.call(this, arr[i], i);
    if(result) {
      return flag = true;
    }
  }
  return flag
}
Array.prototype.myEvery = function(fn){
  if(typeof fn != 'function'){
    return 
  }
  var arr = this;
  for(var i = 0; i < arr.length; i++){
    var result = fn.call(this, arr[i], i);
    if(!result) {
      return false
    }
  }
  return true
}
Array.prototype.myForEach = function(fn){
  if(typeof fn != 'function'){
    throw new TypeError(fn + "is not a function");
    return
  }
  var arr = this;
  for(var i = 0; i < arr.length; i++){
    fn.call(this, arr[i], i);
  }
}
var list = [{a: 1, select: true}, {a: 2, select: true},{a: 2, select: true}];
  list.myForEach(function(item, index) {
  item.a += 1;
})
