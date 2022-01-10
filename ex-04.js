let array = [1, "toto", 34, "javascript", 8];

let numbers = array.filter(function(i) {
    return typeof i === 'number';
})

console.log(numbers);