type StringOrNumber = number | string

function printId(id: (StringOrNumber)){
    console.log("your id is "+id)
}

printId(1)
printId("1")