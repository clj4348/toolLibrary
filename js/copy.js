// es6语法 Object.assign({}, options1, options2);
// 浅拷贝 es5语法
const shallowCopy = (obj1, obj2) => {
  let o = obj1 || {}
  if(typeof obj1 === 'object' && typeof obj2 === 'object') {
    for(let item in obj2) {
      o[item] = obj2[item];
    }
  }
  return o;
}

// 深拷贝
const deepCopy = (obj1, obj2) => {
  let o = obj1 || {}
  // 判断是否为obj
  if(typeof obj1 === 'object' && typeof obj2 === 'object') {
    for(let item in obj2) { // 只对obj1进行枚举
      if(typeof obj2[item] === 'object') { // obj 中如果属性是object类型 就开始递归
        deepCopy(o[item], obj2[item]) // 递归
      } else {
        o[item] = obj2[item]; // 赋值，item相等，取obj2的值
      }
    }
  }
  // 两个是数组直接合并
  else if(typeof obj1 === 'Array' && typeof obj2 === 'Array') {
    o = obj1.concat(obj2)
  }
  // 是否为深拷贝
  return o;
}
/**
 * 深拷贝
 * @param {*} obj 
 */
function deepClone(obj = {}) {
  if(typeof obj != 'object' || obj == null) {
    return obj
  }

  let result
  if(obj instanceof Array) {
    result = []
  } else {
    result = {}
  }
  for (let key in obj) {
    // 保证 key 不是原型的属性
    if(obj.hasOwnProperty(key)){
      // 递归调用
      result[key] = deepClone(obj[key])
    }
  }
  return result
}
//export {
//  shallowCopy,
//  deepCopy
//}
let a; 
const str = 'abc';
const n = 100
const b = true
const s = Symbol('s')

typeof a // undefined
typeof str // string
typeof n // number
typeof b // boolean
typeof s // symbol

// 判断函数
typeof console.log // function
typeof function () {} // function

// 能识别引用类型（不能再继续识别）
typeof null // object
typeof ['a', 'b'] // object
typeof { x: 100 } // object
