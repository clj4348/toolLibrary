
class mm {
  constructor() {
    this.ls = window.localStorage;
  }
  // 将本地日期格式转换为 IOS 日期
  IOSDateString(date) {
    let pad = (d) => d < 10 ? "0" + d : d;
    return date.getFullYear() + '/' +
      pad(date.getMonth() + 1) + '/' +
      pad(date.getDate()) + '/' +
      pad(date.getHours()) + ':' +
      pad(date.getMinutes()) + ':' +
      pad(date.getSeconds())
  }
  // 格式化时间
  formatPassTime(timestamp) {
    let pad = (d) => d < 10 ? "0" + d : d;
    let oldDate = new Date(timestamp.replace(/\S/, 'T')); //旧的时间戳
    let year = oldDate.getFullYear(); //格式化年份
    let month = pad(oldDate.getMonth() + 1);//格式化月份
    let day = pad(oldDate.getDate()); //格式化天数
    let now = new Date(); //当前时间戳
    // 转换为秒级的时间戳
    let timer = (now - oldDate) / 1000;
    let tip = ''; //空的字符串

    if(timer <= 0) {
      tip = '刚刚';
    } else if(Math.floor(timer / 60 <= 5)) { //小于五分钟就设为 '刚刚'
      tip = '刚刚';
    } else if(timer < 3600) { //小于一小时就设为 '多少分钟前'
      tip = Math.floor(timer / 60) + '分钟前';
    } else if(timer >= 3600 && timer < 3600 * 24) { //大于或等于一小时 并且小于一天就设为 '多少小时前'
      tip = Math.floor(timer / 3600) + '小时前';
    } else if(timer / (3600 * 24) <= 31) { // 小于一个月就设为 '多少天前'
      tip = Math.floor(timer / (3600 * 24)) + '天前';
    } else {
      tip = `${year}-${month}-${day}`;
    }
    return tip;
  }

  // 获取url的参数
  getUrlParam(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)');
    let result = window.location.search.substr(1).match(reg);
    return result ? decodeURIComponent(result[2]) : null;
  }

  // 判断是否为邮箱地址
  isEmail(str) {
    return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
  }

  // 判断是否为手机号
  isPhoneNum(str) {
    return /^(0\86\17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
  }

  // 中文
  isChinese(str) {
    return /^[\u4E00-\u9FA5]+$/.test(str);
  }

  // 座机
  isTel(str) {
    return /^(0\d{2,3}-\d{7,8})(-\d{1,4})?$/.test(str);
  }
  // 判断是否为身份
  isIdCard(str) {
    return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str)
  }

  // 获取缓存数据
  getItem(key) {
    let data = this.ls.getItem(key); //如果没有数据的情况下
    data = JSON.parse(data) || {}; // 注意：如果data是null直接调用data.time就会报错

    if(data.time === 0) {
      return data.value;
    } else if(Date.now() > data.time) { // 缓存过期时间到了就清除
      this.ls.removeItem(key);
      return '';
    } else {
      return typeof data.value != 'undefined' ? data.value : '';
    }
  }

  setItem(key, value, time) {
    if(key === 'undefined') {
      return;
    }
    let data = {
      // 如果有time就等于当前的时间戳(ms),否则为0就为永久保存
      time: time ? Data.now() + time : 0,
      value
    }
    data = JSON.stringify(data); // 对象字符串系列化

    /* 为了防止超出存储
     * 使用递归
     * 一旦数据存储超出就清空；再重新保存
     * */
    try {
      this.ls.setItem(key, data);
    } catch(e) {
      this.ls.clear();
      this.ls.setItem(key, data);
    }
  }

  // 清除指定的缓存
  removeItem(key) {
    this.ls.removeItem(key);
  }

  // 清空所有的缓存
  clearStorage() {
    this.ls.clear();
  }
  // 三个进行比较大小
  threeCompareSzie(a, b, c) {
    // 三目表达式
    let max = a > b ? (a > c ? a : c) : (b > c ? b : c);
    return max;
  }
  //判断两个对象是否相等
  equalObj(a, b) {
    for(let p in a) {
      if(a[p] !== b[p]) return false;
    }
    return true;
  }
  // 判断两个数组是否相等
  equalArrays(arrOne, arrTwo) {
    if(arrOne.length !== arrTwo.length) return false;
    for(let i = 0; i < arrOne.length; i++) {
      if(arrOne[i] !== arrTwo[i]) return false;
    }
    return true;
  }
  // 判断是否为ios
  isIos() {
    let u = navigator.userAgent;
    if(u.indexOf('Android') > -1 || u.indexOf('Linux') > -1) { //安卓手机
      return false
    } else if(u.indexOf('iPhone') > -1) { //苹果手机
      return true
    } else if(u.indexOf('iPad') > -1) { //iPad
      return false
    } else if(u.indexOf('Windows Phone') > -1) { //winphone手机
      return false
    } else {
      return false
    }
  }

  // 空字符串操作
  trim(options) {
    let str = optios.str
    let type = options.type || 1 //默认去掉所有的空格
    switch(type) {
      case 1:
        return str.replace(/\s+/g, ""); // 所有空格
      case 2:
        return str.replace(/(^\s*)|(\s*$)/g, ""); // 前后空格
      case 3:
        return str.replace(/(^\s*)/g, ""); // 前空格
      case 4:
        return str.replace(/(\s*$)/g, ""); // 后空格
      default:
        return str; // 没人传就直接返回字符串
    }
  }
  // 控制字数操作
  /*
   * 调用方式
   * utils.wordSub({
   *  str: ''
   *  ran: true,
   *  minRan: 10,
   *  maxRan: 16
   * })
   */
  wordSub(params) {
    if(!(params instanceof Object) && !(params instanceof Array)) {
      return '';
    }
    let ran = params.ran || false,
      minRan = params.minRan,
      maxRan = params.maxRan,
      len = params.str.length,
      maxLen = '';
    if(len > minRan) {
      if(ran) {
        maxLen = Math.floor(Math.random() * (maxRan - minRan + 1) + minRan);
      } else {
        maxLen = params.maxRan;
      }
      var textLen = params.str.substring(0, maxLen);
      return textLen + "...";
    }
  }

  // 统一货币显示格式，保留2位小数，整数部分3位加逗号
  currencyFormatter(option) {
    // 抛出异常
    if(isNaN(option)) {
      throw Error('参数不是Number类型')
    }

    let fxNum = parseFloat(option) //转为浮点数
    let strfloat = fxNum.toString();
    // 判断是否有小数点, 没有就初始化两位小数
    if(strfloat.indexOf('.') == -1) {
      strfloat += '.00'
    }

    let intLen = strfloat.indexOf('.'); // 整数部分的长度
    if(intLen <= 3) {
      return fxNum.toFixed(2); // 格式两位小数点
    }

    let arr = [];
    let str = '';
    for(let i = 0; i < intLen; i++) {
      arr.push(strfloat.charAt(i)) // 添加到数组中
    }

    for(let i = 0; i < arr.length; i++) {
      // i需要从1开始算起 并且  i取余  === intLen 取余
      if(i > 0 && i % 3 === intLen % 3) {
        str += ','
      }
      str += strfloat.charAt(i) // 根据数数组下标拼接数据
    }
    // 需要转化为两位小数点的字符串
    strfloat = parseFloat(strfloat).toFixed(2);
    str += strfloat.substring(strfloat.length - 3);
    return str;
  }

  // 防抖动函数
  throttle(fn, delay) {
    // 默认防抖动时间
    let delayDefault = delay || 200
    let timer = null;
    return(param) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn && fn(param); // 是否有回调函数
      }, delayDefault)
    }
  }
  /***** 数组操作 ****/
  // 从给定数组中移除一项 返回新的数组
  removeArrItem(arr, item) {
    let i = 0;
    while(i < arr.length) {
      if(arr[i] === item) {
        arr.splice(i, 1) // 删除本身
      } else {
        i++
      }
    }
    return arr;
  }

  // 检查数组中是否包含某项
  contains(arr, item) {
    let i = arr.length;
    while(i--) {
      if(arr[i] === item) {
        return true
      }
    }
    return false
  }
};
let utils = new mm()
//export default utils