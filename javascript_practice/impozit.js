const capacitate = prompt("Introduceti capacitatea cilindrului");
const rata = capacitate / 200;
const mesaj = "Impozitul este ";

if (isNaN(capacitate)) {
  console.log("Introduceti un numar valid");
} else if (capacitate <= 1600) {
  console.log(mesaj + rata * 8);
} else if (capacitate >= 1601 && capacitate <= 2000) {
  console.log(rata * 20);
} else if (capacitate >= 2001 && capacitate <= 2600) {
  console.log(rata * 79);
} else if (capacitate >= 2601 && capacitate <= 3000) {
  console.log(rata * 159);
} else {
  console.log(rata * 320);
}













