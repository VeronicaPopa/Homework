const submitBtn = document.getElementById("submit-btn");
const input = document.getElementById("input");
const script = document.body.lastElementChild;
const ul = document.getElementsByTagName("ul");
const formElement = document.getElementsByClassName("form")[0];
const container = document.getElementsByClassName("container")[0];

function markInputWithError(errorMessage) {
  const span = document.createElement("span");
  span.textContent = errorMessage;
  container.insertBefore(span, formElement);
  input.classList.add("input-invalid")
}

function clearInputError() {
  const span = document.getElementsByTagName("span")[0];

  if (span) {
    input.classList.remove("input-invalid");
    container.removeChild(span);
  }
}

function getErrorMessage() {
  const numbers = "1234567890";
  const inputValue = input.value;

  if (inputValue.length < 3) {
    return "Inputul trebuie sa aiba cel putin 3 caractere";
  }

  if (input.value.length > 10) {
    return "Inputul trebuie sa aiba cel mult 10 caractere";
  }

  for (let i = 0; i < inputValue.length; i++) {
    if (numbers.includes(inputValue[i])) {
      return "Inputul nu trebuie sa contina numere";
    }
  }

  return '';
}

function addItemToList() {
  const li = document.createElement("li");
  li.textContent = (input.value);
  ul[0].appendChild(li);

  input.value = '';

  li.onclick = function () {
    li.remove();
    const liLength = document.getElementsByTagName("li").length;

    if (liLength < 10) {
      input.removeAttribute("disabled");
      submitBtn.removeAttribute("disabled");
    }
  }

  const liLength = document.getElementsByTagName("li").length;

  if (liLength >= 10) {
    input.setAttribute("disabled", true);
    submitBtn.setAttribute("disabled", true);
  }
}


function onButtonClick() {
  clearInputError();

  const errorMessage = getErrorMessage();

  if (errorMessage) {
    markInputWithError(errorMessage);

    return;
  }

  addItemToList();
}

submitBtn.addEventListener("click", onButtonClick);

function onKeydown(event) {
  if (event.key === "Enter") {
    onButtonClick();
  }
}
document.addEventListener("keydown", onKeydown); 




