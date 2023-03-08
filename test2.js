const array1 = [1,3,4,2,7,9,10,6,8];
const array2 = [1,3,9,11,5,7,13];
const commonNumbers = [];

for (let i = 0; i < array1.length; i++) {
  if (array2.includes(array1[i])) {
    commonNumbers.push(array1[i]);
  }
}

console.log(commonNumbers); 