//异步操作
var asyncFn = function(){
    return new Promise(function(resolve,reject){
        let num = Math.ceil(Math.random()*20)
        setTimeout(function(){
            if(num > 10){
                resolve(num)
            }else{
                reject(num)
            }
        },1000)
    })
    
}
Promise.retry = function(fn,times){
  return new Promise(async function(resolve,reject){
    while(times--){
        try{
            const res = await fn()
            console.log('执行成功，结果为',res)
            resolve(res)
            break
        }catch(error){
            console.log('执行失败，结果为：' + error)
            if(times===0){
                reject(error)
            }
        }
        
    }
  })
}

Promise.retry(asyncFn,3).then(res=>{
    alert(res)
}).catch(err=>{
    console.warning(err)
})

