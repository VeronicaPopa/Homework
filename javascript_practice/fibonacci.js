var array = [0, 1];
for (let i = 0; i < 18; i++) {
  array.push(array[i] + array[i+1]);
}
console.log(array)