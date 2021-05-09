
 function ContBancar(numeCont, sumaInitiala, valutaContului) {
  this.nume = numeCont;
  this.valuta = valutaContului;
  let suma = sumaInitiala;
  const listaTranzactii = [];

  this.adauga = function(valoare) {
    suma += valoare;
    this.adaugaTranzactie(valoare);
  }

  this.retrage = function(valoare) {
    if (suma < valoare) {
      console.log("Nu ai suficiente fonduri");
      return;
    }
    suma -= valoare;
    this.adaugaTranzactie(-valoare);
  }

  this.adaugaTranzactie = function(valoare) {
    const tranzactie = { valoare: valoare, momentulTranzactiei: new Date() };
    listaTranzactii.push(tranzactie);
  }

  this.interogheazaSold = function() {
    console.log(
      `Contul "${this.nume}" are la momentul actual suma de ${suma} ${this.valuta}`
    );
  }

  this.afiseazaListaDeTranzactii = function() {
    console.log(`-------- Tranzactii ${this.nume} ---------`);
    if (listaTranzactii.length === 0) {
      console.log("Nu ai efectuat nicio tranzactie pana acum");
    } else {
      for (let tranzactie of listaTranzactii) {
        console.log(
          `Ai efectuat o tranzactie de ${tranzactie.valoare} ${this.valuta} in data de ${tranzactie.momentulTranzactiei}`
        );
      }
    }
  }
}

const contPersonal = new ContBancar("Contul meu personal", 0, "RON");
const contDeEconomii = new ContBancar("Contul de economii", 100, "EUR");
const cont = new ContBancar("Cont GBP", 1000000, "GBP");

contPersonal.adauga(500);
contDeEconomii.retrage(50);
contDeEconomii.retrage(30);

contPersonal.retrage(2000000);

contDeEconomii.suma = 1000000; // nu are niciun efect asupra metodelor

contPersonal.interogheazaSold();
contDeEconomii.interogheazaSold();

contDeEconomii.interogheazaSold();

contPersonal.afiseazaListaDeTranzactii();
contDeEconomii.afiseazaListaDeTranzactii();

cont.afiseazaListaDeTranzactii();

cont.interogheazaSold();
