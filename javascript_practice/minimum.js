
const arr = [3, -9, 45, 0, 24];
var minimum = arr[0];
for (let i = 0; i < arr.length; i++){
 if (minimum > arr[i+1]) {
   minimum = arr[i+1];
 }
}
  console.log(minimum);  