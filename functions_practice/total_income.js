function salaryCalculator(str) {
  let total = 0;
  let splitStr = str.split(" ");
  
  for (i = 0; i < splitStr.length; i++) {
    let currentWord = splitStr[i];

    if (!isNaN(currentWord)) {
      let currencyPeriod = splitStr[i + 1].split("/");
      let currency = currencyPeriod[0];
      let period = currencyPeriod[1];

      if (currency === "euro") {
        if (period === "luna") {
          total += parseInt(currentWord) * 4.8 * 12;
        } else if (period === "an") {
          total += parseInt(currentWord) * 4.8;
        } 
      } else if (currency === "usd") {
          if (period === "luna") {
            total += parseInt(currentWord) * 4.3 * 12;
          } else if (period === "an") {
            total += parseInt(currentWord) * 4.3;
          }
        } else if (currency === "lei") {
          if (period === "luna") {
            total += parseInt(currentWord) * 12;
          } else if (period === "an") {
            total += parseInt(currentWord);
          }
        }
    }
  }
  return ("Venitul total anual al lui Ion este de : " + total + " lei");
}
console.log(salaryCalculator("Ion cistiga 5000 lei/luna  din salariu, 10000 lei/an bonus si 1500 lei/luna din freelancing"));
console.log(salaryCalculator("Ion cistiga 1000 euro/luna  din salariu, 9000 lei/an bonus si 1000 usd/luna din freelancing"));
