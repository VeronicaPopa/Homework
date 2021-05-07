function Calculator() {
  this.x = 0;
  this.y = 0;

  this.read = function (a, b) {
    this.x = a;
    this.y = b;
  };

  this.add = function () {
    return this.x + this.y;
  };

  this.diff = function () {
    return this.x - this.y;
  };

  this.multiply = function () {
    return this.x * this.y;
  };

  this.divide = function () {
    if (this.y === 0) {
      return "Nu se poate calcula";
    }
    return this.x / this.y;
  };
}

const calculator = new Calculator();

// calculator.read(6, 2);

// console.log(calculator.add());
// console.log(calculator.diff());
// console.log(calculator.multiply());
// console.log(calculator.divide());

// calculator.read(20, 0);

// console.log(calculator.add());
// console.log(calculator.diff());
// console.log(calculator.multiply());
// console.log(calculator.divide());




// Am creat totul in JS doar pt a practica DOM  manipulations

const existingScript = document.body.firstElementChild;

const container = document.createElement("div");
container.classList.add("container");
document.body.insertBefore(container, existingScript);

const h1 = document.createElement("h1");
h1.textContent = "Calculator";
container.appendChild(h1);

const formular = document.createElement("form");
container.appendChild(formular);

const inputOneContainer = document.createElement("div");
inputOneContainer.classList.add("container-input1")
formular.appendChild(inputOneContainer);

const inputOperandOne = document.createElement("input");
const labelOpOne = document.createElement("label");
labelOpOne.textContent = "Operand One";
labelOpOne.setAttribute("for", "op1");
inputOneContainer.appendChild(labelOpOne, inputOperandOne);
inputOperandOne.setAttribute("type", "number");
inputOperandOne.setAttribute("id", "op1");
inputOneContainer.appendChild(inputOperandOne);

const inputTwoContainer = document.createElement("div");
inputTwoContainer.classList.add("container-input2")
formular.appendChild(inputTwoContainer);

const inputOperandTwo = document.createElement("input");
const labelOpTwo = document.createElement("label");
labelOpTwo.textContent = "Operand Two";
labelOpTwo.setAttribute("for", "op2");
inputTwoContainer.appendChild(labelOpTwo, inputOperandTwo);

inputOperandTwo.setAttribute("type", "number");
inputOperandTwo.setAttribute("id", "op2");

inputTwoContainer.appendChild(inputOperandTwo);

const addBtn = document.createElement("input");
addBtn.setAttribute("type", "button");
addBtn.classList.add("btn");
addBtn.value = "ADD"
formular.appendChild(addBtn);

const diffBtn = document.createElement("input");
diffBtn.setAttribute("type", "button");
diffBtn.classList.add("btn");
diffBtn.value = "SUB";
formular.appendChild(diffBtn);

const multBtn = document.createElement("input");
multBtn.setAttribute("type", "button");
multBtn.classList.add("btn");
multBtn.value = "MUL"
formular.appendChild(multBtn);

const divBtn = document.createElement("input");
divBtn.setAttribute("type", "button");
divBtn.classList.add("btn");
divBtn.value = "DIV";
formular.appendChild(divBtn);

const h2 = document.createElement("h2");
h2.textContent = "Result:";
container.appendChild(h2);

const result = document.createElement("p");
result.textContent = "Show result here";
container.appendChild(result);

addBtn.addEventListener("click", function () {
  calculator.read(parseInt(inputOperandOne.value) , parseInt(inputOperandTwo.value) );
  result.textContent = calculator.add();
})
diffBtn.addEventListener("click", function () {
  calculator.read(parseInt(inputOperandOne.value) , parseInt(inputOperandTwo.value) );
  result.textContent = calculator.diff();
})

multBtn.addEventListener("click", function () {
  calculator.read(parseInt(inputOperandOne.value) , parseInt(inputOperandTwo.value) );
  result.textContent = calculator.multiply();
})

divBtn.addEventListener("click", function () {
  calculator.read(parseInt(inputOperandOne.value) , parseInt(inputOperandTwo.value) );
  result.textContent = calculator.divide();
})


