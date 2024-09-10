const sampleObject = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
};

function objectMethods(obj) {
    let entries = Object.entries(obj);
    console.log("After Object.entries():", entries);

    let hasProp = obj.hasOwnProperty("property");
    console.log("After hasOwnProperty():", hasProp);

    let newObj = Object.assign({}, obj, { newProperty: "newValue" });
    console.log("After Object.assign():", newObj);
}

objectMethods(sampleObject);