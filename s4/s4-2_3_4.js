// async.waterfall() => chạy đồng bộ trên xuống dưới
// async.parallel() => chạy song song


const Q = require('q')

const addNumberPromise = function(x,y){
    var deferred = Q.defer()
    addNumbers(x,y,function(err,data){
        if(err){
            deferred.reject(err)
        }else{
            deferred.resolve(data)
        }
    })
    return deferred.promise
}

function addNumbers(x,y,callback) {
    if(typeof x !== 'number'){
        callback(new Error('The number must be a number'))
    }if(typeof y !== 'number'){
        callback(new Error('The number must be a number'))
    }
    let result = x + y
    callback(null,result)
}

addNumberPromise(1,2)
.then(function(result){
    return addNumberPromise(result,3)
})
.then(function(result){
    return  addNumberPromise(result,4)
})
.then(function(result){
    console.log('Result = '+ result)
})
.catch(function(err){
    console.log(err)
})


function addnumbers(x,y){
    return new Promise(function(resolve,reject){
        if(typeof x !== 'number'){
            reject(new Error('The number must be a number'))
        }
        if(typeof y !== 'number'){
            reject(new Error('The number must be a number'))
        }
        resolve(x+y)
    })
}