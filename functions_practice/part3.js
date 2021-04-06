//1. verificam daca un numar este palindrom

function palindromeNumber(number) {
  const x = number + "";
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== x[x.length - 1 - i]) {
      return (number + " is not a palindrome number");
    }
  }
  return (number + " is a palindrome number");
}
console.log(palindromeNumber(4553));


//2.returnam un sir de caractere,modificind prima litera din fiecare cuvint

function capitalize(input) {
  var splitInput = input.toLowerCase().split(' ');
  for (var i = 0; i < splitInput.length; i++) {
    splitInput[i] = splitInput[i].charAt(0).toUpperCase() + splitInput[i].substring(1);
  }
  return splitInput.join(' ');
}
console.log(capitalize("ana are mere"));

//3.verificam daca un numar este prim

function primeNr(num) {
  if (num <= 1) {
    return false;
  }
  for (i = 2; i < num; i++) {
    if (num % i === 0) {
      return (num + " nu este prim");
    }
  }
  return (num + " este prim");
}
console.log(primeNr(5));
