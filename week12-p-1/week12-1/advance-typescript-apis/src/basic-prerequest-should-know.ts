interface User{
    name: string;
    age: number;
}

function sumOfAge(user1: User, user2: User){
    return user1.age + user2.age
}

const sum = sumOfAge({
    name: "dhyey1015",
    age: 19
},{
    name: "dhyey1818",
    age: 19
})