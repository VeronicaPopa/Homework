const selects = document.getElementsByTagName("select");
const fromSelect = selects[0];
const toSelect = selects[1];

let toCurrencyCode = 'EUR';
let fromCurrencyCode = 'EUR';

const convertBtn = document.getElementsByClassName("convert")[0];
const profilesContainer = document.getElementsByClassName("profiles-container")[0];


fromSelect.addEventListener("change", function(event) {
  fromCurrencyCode = event.target.value;
});

toSelect.addEventListener("change", function(event) {
  toCurrencyCode = event.target.value;
});

convertBtn.addEventListener("click", function() {
  currencyConvert('MDL', 'EUR');
});

fillSelects();

function fillSelects() {
  fetch('https://api.exchangerate-api.com/v4/latest/EUR')
  .then(response => response.json())
  .then(currencies => {
    const rates = currencies.rates;
    const currencyCodes = Object.keys(rates);
    for (let select of selects) {
      for (let rate in rates) {
        const option = document.createElement('option');
        option.value = rate;
        option.textContent = rate;
        select.appendChild(option);
      }
    }
  })
}

function currencyConvert() {
  fetch('https://api.exchangerate-api.com/v4/latest/' + fromCurrencyCode)
  .then(response => response.json())
  .then(currencies => {
    const firstCurrencyInput = document.getElementsByClassName("first-currency-input")[0];
    const secondCurrencyInput = document.getElementsByClassName("second-currency-input")[0];
    const rates = currencies.rates;
    const currencyCodes = Object.keys(rates);

    secondCurrencyInput.value = firstCurrencyInput.value * rates[toCurrencyCode];
  })
}

