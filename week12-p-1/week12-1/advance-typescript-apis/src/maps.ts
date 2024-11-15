interface User5{
    id: string;
    name: string;
}

const userMap = new Map<string, User5>();

userMap.set(
    "key1",
    {
        id: "id1",
        name: "dhyey1015",
    }
);
userMap.set(
    "key2",
    {
        id: "id2",
        name: "dhyey1818",
    }
)
console.log(userMap.get("id2"))