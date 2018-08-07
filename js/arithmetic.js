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

/*
 * 一球从100米高度自由落下，每次落地后反跳回原高度的一半；再落下
 * 求它在第10次落地时，共经过多少米？第10次反弹多高？
 */
function ball() {
	let s = 0; //初始值
	let h = 100; //高度为100
	for(let i = 0; i < 10; i++) {
		s = s + h // 落下的高度
		// 每次落下的高度
		h = h / 2
		s = s + h //弹上去的高度
	}
	return {
		s: Math.round(s),
		h: Math.round(h)
	}
}

/**
 * 有1、2、3、4个数字，能组成多少个互不相同且无重复数字的三位数？都是多少？
 * 1.程序分析：可填在百位、十位、个位的数字都是1、2、3、4, 并且少于100。组成所有的排列后再去掉不满足条件的排列。
 * */
function nonRepeatedData() {
	var arr = []
	var sum = 0;
	for(var i = 0; i <= 4; i++) {
		for(var j = 0; j <= 4; j++) {
			for(var k = 0; k <= 4; k++) {
				if(i != j && j != k && i != k) { // 每个位数各部相同
					sum = i * 100 + k * 10 + j
					if(sum > 100) {
						arr.push(sum)
					}
				}
			}
		}
	}
	return arr
}

/**
 * 输入某年某月某日，判断这一天是这一年的第几天？
 * 1.程序分析：以3月5日为例，应该先把前两个月的加起来，
 * 然后再加上5天即本月的第几天，特殊情况，闰年且输入月份大于3时需考虑多加一天。
 * */

// 定义一个多少天的方法
function countDay(year, month, day) {
	var sum = 0
	var days = 0
	for(var i = 0; i < month; i++) {
		switch(i) {
			case 1:
			case 3:
			case 5:
			case 7:
			case 8:
			case 10:
			case 12:
				days = 31
				break;
			case 4:
			case 6:
			case 9:
			case 11:
				days = 30
				break;
			case 2:
				//判断是否为闰年
				if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0) {
					days = 29
				} else {
					days = 28
				}
				break;
		}
		sum += days
	}
	sum = sum + day
	return sum
}
00
