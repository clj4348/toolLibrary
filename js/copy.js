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