// 使用快慢指针来记录遍历的坐标。

// 开始时这两个指针都指向第一个数字

// 如果两个指针指的数字相同， 则快指针向前走一步

// 如果不同， 则两个指针都向前走一步

// 当快指针走完整个数组后， 慢指针当前的坐标加 1 就是数组中不同数字的个数

const calc=(arr) =>{
    var slowwIndex = 0 
    //quick其实就是i
    for (let quickIndex = 0; quickIndex < arr.length; quickIndex++) {
        if(arr[slowwIndex] !== arr[quickIndex]){
            slowwIndex += 1
            arr[slowwIndex] = arr[quickIndex]
        }
    }
    return slowwIndex + 1
}
var arr = [1, 2, 3, 4, 6, 7, 7, 7, 8]
console.log(calc(arr))
console.log(arr)
window.calc = calc
