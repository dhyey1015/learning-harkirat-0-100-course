type User2 = {
    readonly name: string;
    readonly age: number;
}
// can do this too |
//                 v
// const user3: Readonly<User2> = {
const user3: Readonly<User2> = {
    name: "dhyey1015",
    age: 10,
}

//can't do this
// user3.age = 188;
// user3.name = "ijdbiauyy"