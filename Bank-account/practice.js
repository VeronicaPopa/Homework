
 function contBancar(numeCont, sumaInitiala, valutaContului) {
  let transactionCount = 1;
  const nume = numeCont;
  const valuta = valutaContului;
  let suma = sumaInitiala;
  const listaTranzactii = [];

  function adauga(valoare) {
    suma += valoare;
    adaugaTranzactie(valoare, "Deposit");
  }

  function retrage(valoare) {
    if (suma < valoare) {
      alert("Nu ai suficiente fonduri");
      return;
    }
    suma -= valoare;
    adaugaTranzactie(valoare, "Withdraw");
  }

  function adaugaTranzactie(valoare, type) {
    // metoda privata, nu avem acces la ea din afara
    const date = new Date();
    const dateString = date.getDate()  + "-" + (date.getMonth()+1) + "-" + date.getFullYear();
    const tranzactie = { count: transactionCount++, momentulTranzactiei: dateString, tipul: type, valoare: valoare };
    listaTranzactii.push(tranzactie);
  }  

  function getTransactions() {
    return listaTranzactii;
  }

  function interogheazaSold() {
    console.log(
      `Contul "${nume}" are la momentul actual suma de ${suma} ${valuta}`
    );
  }

  function getSum() {
    return suma;
  }

  function afiseazaListaDeTranzactii() {
    console.log(`-------- Tranzactii ${numeCont} ---------`);
    if (listaTranzactii.length === 0) {
      console.log("Nu ai efectuat nicio tranzactie pana acum");
    } else {
      for (let tranzactie of listaTranzactii) {
        console.log(
          `Ai efectuat o tranzactie de ${tranzactie.valoare} ${valuta} in data de ${tranzactie.momentulTranzactiei}`
        );
      }
    }
  }

  return {
    suma, // este valoarea din momentul executiei metodei contBancar (ramane blocata in timp, indiferent de ce modificari aducem la variabila suma in afara contextului de executie)
    adauga,
    retrage,
    interogheazaSold,
    afiseazaListaDeTranzactii,
    getSum,
    getTransactions
  };
}

const contPersonal = contBancar("Contul meu personal", 0, "RON");
updateAmount(contPersonal.suma);

const depositBtn = document.getElementById("deposit-btn");
depositBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const inputNumber = getInsertedValue();
  if (inputNumber === undefined) {
    return;
  }
  contPersonal.adauga(inputNumber);
  const calculatedSum = contPersonal.getSum();
  updateAmount(calculatedSum);
  cleanInput();
  generateListOfTransactions();
})

const withdrawBtn = document.getElementById("withdraw-btn");
withdrawBtn.addEventListener("click", function(event) {
  event.preventDefault();
  const inputNumber = getInsertedValue();
  if (inputNumber === undefined) {
    return;
  }
  contPersonal.retrage(inputNumber);
  const calculatedSum = contPersonal.getSum();
  updateAmount(calculatedSum);
  cleanInput();
  generateListOfTransactions();
})

function generateListOfTransactions() {
  const transactions = contPersonal.getTransactions();
  const tbody = document.getElementsByTagName("tbody")[0];
  tbody.innerHTML = "";
  for (let transaction of transactions) {
    const tr = document.createElement("tr");
    const objectKeys = Object.keys(transaction);
    for (let key of objectKeys) {
      const td = document.createElement("td");
      td.textContent = transaction[key];
      tr.appendChild(td);
    }
    tbody.appendChild(tr);
  }
}

function cleanInput() {
  const input = document.getElementById("input");
  input.value = '';
}

function getInsertedValue() {
  const input = document.getElementById("input").value;
  if (isNaN(input)) {
    return;
  }

  const inputNumber = parseInt(input);
  return inputNumber;

}

function updateAmount(amount) {
  const amountElement = document.getElementById("amount");
  amountElement.textContent = amount;
}

