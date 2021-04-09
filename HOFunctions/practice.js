//1 EVERY

const numbers = [2, 4, 6, 8];
console.log(numbers.every((el) => el % 2 === 0));


//2 FOR EACH

const fruits = ["oranges", "apples", "cherries", "apricots"];
fruits.forEach(function(item, index){
  console.log(`${index}: ${item}`);
});


// const fruits = ["oranges", "apples", "cherries", "apricots"];
// const listOfFruits = fruits.forEach((item, index) => console.log(`${index}: ${item}`));


// REDUCE

const arrayNumbers = [1, 2 ,3 ,4 ,5 ];
const summ = arrayNumbers.reduce(function(accumulator, currentValue) {
return accumulator + currentValue;
});
console.log(summ);


const arrayNumbers1 = [1, 2 ,3 ,4 ,5 ,6, 7];
console.log(arrayNumbers1.reduce((accumulator, currentValue) => accumulator + currentValue));


let total = [1, 2, 3, 4, 5, 6].reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(total);



