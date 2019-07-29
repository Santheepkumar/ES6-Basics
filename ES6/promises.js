function asynFun(){

    return new Promise(
        function(resolve, reject){
            resolve(result);
            rejectz(error);
        }
    )
}

asynFun()
.then(result => {888888888})
.catch(error => {905869585})


//simple example

let myp = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve('HURRY')
    }, 1000)


})

myp
.then(function(v){
    console.log(v)
})