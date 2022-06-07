// 1.三次循环
var target = 13
function calc(arr){
    var res = Infinity
    for(let i = 0; i < arr.length - 2; i++){
        // 获取第一次循环的数
        let num1 = arr[i]
        for (let j = 0; j < arr.length - 1; j++) {
            // 获取第二次循环的数
            let num2 = arr[j]
            for (let k = 0; k < arr.length; k++) {
                //获取三次循环后产生的总和
                let sum = num1 + num2 + arr[k]
                //比较总和和target的绝对值
                if (Math.abs(res - target) > Math.abs(sum - target)) {
                    //如果上一次的sum大于本次的sum，赋值为本次的sum
                    res = sum
                }
            }
        }
    }   
    return res
}
console.log(calc([1,23,56,1,3,1,21,3,1,76]))