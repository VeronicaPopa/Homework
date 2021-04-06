
function converter(temp) {
  let temperatura = temp.substring(0, temp.length - 1);
  let unit = temp.charAt(temp.length - 1);

  if (isNaN(unit) && unit.toUpperCase() === "C") {
    return temperatura * 9 / 5 + 32;
  }
  if (isNaN(unit) && unit.toUpperCase() === "F") {
    return ((5 / 9) * (temperatura - 32)).toFixed(1);
  }
  return ("Insert a valid input e.g. : 30C or 50F ");
}

console.log(converter("41C"));
console.log(converter("105.8F"));

