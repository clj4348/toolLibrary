// 递归阶乘
function fuctorial(number) {
	let n = parseInt(number);
	if(n <= 1) {
		return 1
	} else {
		return fuctorial(n - 1) * n
	}
}

// 非递归 阶乘
function nonRecursiveFactorial(n) {
	if(n === 0) {
		return 0
	} else if(n === 1) {
		return n
	}
	for(let i = n - 1; i >= 1; i--) {
		n = n * i
	}
	return n
}

// 递归累加
function cumulative(number) {
	let n = parseInt(number);
	if(n <= 1) {
		return 1
	} else {
		return cumulative(n - 1) + n
	}
}

// 非递归 累加 
function nonRecursiveCumulative(n) {
	if(n === 0) {
		return 0
	} else if(n === 1) {
		return n
	}
	for(let i = n - 1; i >= 1; i--) {
		n = n + i
	}
	return n
}

// 两个数之间的质数
function a(num, num2) {
	let arr = [];
	let arr2 = [];
	let n = num;
	for(let i = 2; i <= n; i++) {
		if(i % 2 != 0) {
			arr.push(i)
		}
	}
	for(let j = 0; j < arr.length; j++) {
		if(b(arr[j]) && arr[j] > num2) {
			arr2.push(arr[j])
		}
	}
	return arr2
}

function b(n) {
	for(var i = 3; i < n; i += 2) {
		if(n % i === 0) {
			return false
		}
	}
	return true
}

// 九的阶乘算法
function jiujiu() {
	let i = 0;
	let j = 0;
	for(i = 1; i <= 9; i++) {
		for(j = 1; j <= 9; j++) {
			console.log(i * j)
		}
	}
}

// 经典的兔子算法 start
function tuzi(n) {
	var arr = []
	for(var i = 0; i < n; i++) {
		arr.push(rabbit(i))
	}
	return arr
}

// 递归算法
function rabbit(n) {
	if(n <= 0) {
		return 0
	} else if(n == 1 || n == 2) {
		return 1
	} else {
		return rabbit(n - 1) + rabbit(n - 2)
	}
}
// 经典的兔子算法 end


// 计算字符串含有多少个英文，多少个中文, 其它字符
function strLength(str) {
	let regCn = /^[\u4E00-\u9FA5]$/
	let regEn = /^[a-zA-Z]$/
	let space = /\s+/g
	let strCn = ''
	let strEn = ''
	let spaceStr = ''
	let ortherStr = ''
	for(let i = 0; i < str.length; i++) {
		if(regCn.test(str[i])) {
			strCn += str[i]
		} else if(regEn.test(str[i])) {
			strEn += str[i]
		} else if(space.test(str[i])) {
			spaceStr += str[i]
		} else {
			ortherStr += str[i]
		}
	}
	return {
		strCn: strCn,
		strEn: strEn,
		spaceStr: spaceStr,
		ortherStr: ortherStr
	}
}