let arr = [1, 2, 3, 4, 5, 6];
const d = arr.filter((number,index) => {
    return number % index === 0;
})

console.log(d);