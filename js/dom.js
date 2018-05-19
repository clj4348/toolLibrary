const $ = (selector) => {
	let type = selector.substring(0, 1); // 拿到第一个字符串
	if(type === "#") {
		if(document.querySelector) {
			return document.querySelector(selector)
		}
		return document.getElementById(selector.substring(1))
	} else if(type === '.') {
		if(document.querySelector) {
			return document.querySelector(selector)
		}
		return document.getElementsByClassName(selector.substring(1))
	} else {
		// 获取元素的个数
		return document['querySelectorAll' ? 'querySelectorAll' : 'getElementsByTagName'](selector)
	}
}
// 获取某个元素距离文档区域的距离
const offset = (el) => {
	let top = el.offsetTop;
}

// 获取浏览器窗口的滚动条位置
const getScrollOffset = (w) => {
	w = w || window;
	// 所有的浏览器  getScrollOffset
	if(w.pageXOffset != null) {
		return {
			x: w.pageXOffset, // x坐s标
			y: w.pageYOffset
		}
	}
	let d = w.document;
	// 标准模式
	return {
		x: d.documentElement.scrollLeft,
		y: d.documentElement.scrollTop
	}
}

// 判断是否为pc端
const isPC = () => {
	let userAgentInfo = navigator.userAgent;
	// 移动设备的类型
	let Agents = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"]
	for(let item in Agents) {
		if(userAgentInfo.indexOf(Agents[item]) > 0) {
			return false
		}
	}
	return true
}

// 获取文档的高和宽
const getViewportSize = () => {
	let w = window;
	if(isPC()) {
		return {
			w: document.documentElement.clientWidth,
			h: document.documentElement.clientHeight
		}
	}

	return {
		w: w.screen.height,
		h: w.screen.width
	}
}
export {
	$,
	getScrollOffset,
	getViewportSize,
	isPC
}