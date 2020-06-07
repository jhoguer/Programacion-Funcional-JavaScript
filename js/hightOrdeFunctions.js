const array1 = [1, 2, 3];
const array2 = [];

for (let i = 0; i < array1.length; i++) {
  array2.push(array1[i] * 2)
}

console.log(array2);


//////////////////////////////////

const array3 = [1, 2, 3];
const array4 = array3.map(function(item) {
  return item * 2
})

console.log(array4);