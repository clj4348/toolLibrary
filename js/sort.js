bubbles2 = (arr) => { //冒泡排序
  //需要个for循环
  for(let i = 0; i < arr.length - 1; i++) {
    for(let j = 0; j < arr.length - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        var temp = arr[j]; //比较的数
        //位置交换
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

let m = 0;
let n = 0;
bubbles1 = arr => { //冒泡排序

  //需要两个for循环
  for(let i = 0; i < arr.length - 1; i++) {
    //开闭原则。(写在第一个for循环里，是为了，没轮比较初始化bool变为true。)
    var bool = true
    //指定轮数和次数
    for(let j = 0; j < arr.length - 1; j++) {
      if(arr[j] > arr[j + 1]) {
        var temp = arr[j]; //比较的数

        //位置交换
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        bool = false;
      }
      m++; //双重for循环计算的次数
    }
    n++ //第一个for循环的轮数

    //bool这个变量默认值为true；如果本轮比较有一对元素相互交换位置，那么也不能挑出循环
    //但是，如果本轮比较没有元素相互交换位置，那么比较完成，挑出循环
    if(bool) {
      break;
    }
  }
  return arr;
}

/**
 * 算法描述和实现
 *
 * 首先默认是从数组第一个元素12开始排序，
 * 找到下一个15,15比12大,
 */
insertionSort = arr => {
  if(arr instanceof Array) { //判断是否是数组
    for(let i = 0; i < arr.length; i++) {
      let key = arr[i]; //默认选择第一个元素
      let j = i - 1; // 因为每次轮比，当前的元素索引 - 1
      while(arr[j] > key) {
        arr[j + 1] = arr[j]; //前一个值赋值给后一个值,
        j--
      }
      arr[j + 1] = key //插入当前的素组元素值
    }
    return arr
  } else {
    return 'arr is not Array'
  }
}

/**
 * 快速排序
 */
quickSort = (arr) => {
  //判断数组是否存在
  if(arr.length < 1) {
    return arr;
  };
  let prevIndex = Math.floor(arr.length / 2); //取数组的中间长度
  let pivot = arr.splice(prevIndex, 1)[0];
  let left = [];
  let right = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return(quickSort(left).concat([pivot], quickSort(right)));
}

/**
 * 选择排序原理
 * 首先在待排序序列中找到最小元素,
 * 并把该元素放在数组的最前面，
 * 然后再从剩下的元素中寻找最小的元素，
 * 放在之前最小元素的后面，
 * 直到排序完毕
 */
selectSort = arr => {
  let minIndex, temp;
  for(let i = 0; i < arr.length; i++) {
    minIndex = i; //默认索引，
    // i+1的 j 和 minIndex的数组的索引值进行比较
    //首先是以12为基准，也就是minIndex = 0;
    //开始查找比较,找到15,15比12大返回，继续查找，找到9,
    //9比12小，所以这时minIndex = 2;继续进行比较, 找到10
    // 这时是以9作为最小值进行比较, 10比9大,返回继续查找,
    // 找到6，6比9小，minIndex = 4; 继续进行比较，找到20,
    // 20比6大；返回，循环结束，找到最小值为6; 剩下的比较排序 同理
    for(let j = i + 1; j < arr.length; j++) {
      if(arr[j] < arr[minIndex]) { // 寻找最小数
        minIndex = j; //最小数索引
      }
    }
    temp = arr[i]; //按照从左往右循序查找排序
    arr[i] = arr[minIndex];
    arr[minIndex] = temp //最小数索引替换他的位置
  }
  return arr;
}

/**
 * 希尔排序算法
 * 希尔排序的核心在于间隔序列的设定。
 * 既可以提前设定好间隔序列，也可以动态的
 * 定义间隔序列。
 */

shellSort = arr => {
  let len = arr.length,
    gap = 1,
    temp;
  while(gap < len / 5) { // 动态定义间隔序列
    gap = gap * 5 + 1;
  }
  for(gap; gap > 0; gap = Math.floor(gap / 5)) {
    for(let i = gap; i < len; i++) {
      temp = arr[i];
      for(var j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j];
      }
      arr[j + gap] = temp;
    }

  }
  return arr;
}

/**
 * 算法描述和实现
 * 会将数进行两两分组，
 * 每组之间进行排序，每小组排序完成后，
 * 再将这些有序的小组与有序的小组间进行合并排序，
 * 直到最后合并完。
 */

mergeSort = (arr) => {
  //设置终止的条件
  if(arr.length < 2) {
    return arr;
  }

  //设置中间值
  const mid = parseInt(arr.length / 2);
  //第一个和middle个之间为左子列

  const left = arr.slice(0, mid);

  //第middle+1到最后为右子列
  const right = arr.slice(mid);

  if(left == "undefined" && right == "undefined") {
    return false;
  }

  return TwoWayMergSort(mergeSort(left), mergeSort(right));
}

TwoWayMergSort = (left, right) => {
  const result = [];

  while(left.length && right.length) {
    if(left[0] <= right[0]) {
      //把left的左子数推出一个，然后push进result数组里
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }

    //经过上面一次循环，只能左子列或右子列一个部位空，或者都为空
  }
  while(left.length) {
    result.push(left.shift());
  }
  while(right.length) {
    result.push(right.shift());
  }
  return result;
}