function isLegal(age: number): boolean{
    if (age >= 18){
        return true
    }
    else{
        return false
    }
}

const x: boolean = isLegal(19)

console.log(x);