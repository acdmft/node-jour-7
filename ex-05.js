let numbers = [1,2,3,4,5,6,7,8]; 

let even = numbers.filter(function(n) {
    return n % 2 === 0;
})

console.log(even);