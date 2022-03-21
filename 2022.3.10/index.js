/*
 * @Author: niyongwei
 * @Date: 2022-03-10 10:49:22
 * @LastEditors: niyongwei
 * @LastEditTime: 2022-03-21 20:11:37
 * @FilePath: /EveryDay/2022.3.10/index.js
 * @Description:  
 * 
 * Copyright (c) 2022 by nyw, All Rights Reserved. 
 */
var calcstring = function (str) {
    var valid = true
    if (str === '') return true
    if (str.length % 2 !== 0) return false
    //拆成两半
    var arr = [],
        left = '{([',
        mapper = {
            "{": "}",
            "(": ")",
            "[": "]",
        }
    for (let i in str) {
        var item = str[i]
        // debugger
        //将左侧匹配项压入栈
        if (left.indexOf(item) !== -1) {
            arr.push(item)
        } else {
            var last = arr.pop()
            if (mapper[last] !== item) {
                //右边没有匹配项
                return false
            }
        }
    }
    if (arr.length !== 0) {
        return false
    }
    return valid


}
console.log(calcstring('([)]'))
console.log(calcstring('{[]}'));
console.log(calcstring('{]}'));