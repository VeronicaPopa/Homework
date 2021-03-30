var array =  [4, true, 2, 7, 'nine', undefined, 1];
var total = 0;
for (let i = 0; i < array.length; i++){
  if (typeof array[i] === 'number'){
    total = total + array[i];
  } 
}
console.log(total)