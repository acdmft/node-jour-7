let longNames = [
    {
        firstName: "Jane", 
        lastName: "Doe",

    },
    {
        firstName: "John",
        lastName: "Smith"
    }
]

let shorNames = longNames.map(function(obj) {
    return {name: `${obj.firstName} ${obj.lastName}`};
})

console.log(shorNames);