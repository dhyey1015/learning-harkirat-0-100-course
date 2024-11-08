interface User  {
    firstName: string;
    lastName: string;
    age: number;
    email?: string; //optional
}

const user: User = {
    firstName: "dhyey",
    lastName: "kakadiya",
    age: 20
}

function isLegal1(user: User){
    if(user.age>18){
        return true
    }
    else{
        return false
    }
}

function greet1(user: User){
    console.log("hello" + user.firstName + user.lastName)
}
