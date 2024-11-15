// with using records
interface User3 {
    id: string;
    name: string;
}

type Users = Record<string, User3>

const users1: Users = {
    'key1': {
        id: "id1",
        name: "dhyey1015",
    },
}
console.log(users1['key1']);


// without using record
type User4 = {
    id: string;
    name: string;
}

type Users1 = {
    [key: string] : User4
}
// the above code represent this
// type Users = {
//     [key: string] : {
//         id: string;
//         name: string;
//     }
// }

const users: Users1 = {
    "key1":{
        id: "id1",
        name: "dhyey1015"
    },
    "key2" : {
        id: "id2",
        name: "dhyey1818"
    }
}
// console.log(users['key1']);