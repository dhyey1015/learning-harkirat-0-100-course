// write my own promise function
function myownPormise(){

}


class promiseCopy{

    constructor(callback){
        callback(this.resolve, this.reject);
    }

    resolve(pass){
        this.pass = pass;
    }

    reject(err){
        this.err = err;
    }
    
    then(fn){
        return fn(this.pass)
    }

    catch(fn){
        return fn(this.err)
    }
}

const p = new promiseCopy(function(resolve, reject){
    resolve("1000")
})

p.then(function(x){
    console.log(x)
})