// 1....
function stringValidator(input) {
  if (input.length < 8) {
    return false;
  }
  let specialCharacters = "!@#$%^&*()_+][}{';\":/.,?>]<}";

  for (let i = 0; i < input.length; i++) {
    if (specialCharacters.includes(input[i])) {
      return true;
    }
  }
  return false
}
console.log(stringValidator("ana_popescu"));


//2....
function emailValidator(mail) {
  let splitByAt = mail.split("@");

  if (splitByAt.length <= 1) {
    return false;
  }
  if ((splitByAt[0].length > 0) && (splitByAt[1].includes("."))) {
    let splitByPoint = splitByAt[1].split(".");
    if ((splitByPoint[0].length > 0) && (splitByPoint[1].length > 0)) {
      return true;
    }
  }
  return false;
}
console.log(emailValidator("anapopescu@google.com"));

//3....
function userValidator(user) {
  let nameSurnameValid = user.name.length > 1 && user.surname.length > 1;
  let emailValid = emailValidator(user.email);
  let passwordValid = stringValidator(user.password);
  let userValid = emailValid && passwordValid && nameSurnameValid;

  if (userValid === true) {
    return true;
  }
  return false;
}

let userInfo = {
  name: "Popescu",
  surname: "Ana",
  password: "ana_popescu",
  email: "anapopescu@google.com"
}
console.log(userValidator(userInfo));


//4....
function myFunction(users) {
  if (users.length < 1) {
    return false;
  }
  let list_of_users = [];
  
  for (let i = 0; i < users.length; i++) {
    let usersValid = userValidator(users[i]);
    if (usersValid === true) {
      list_of_users.push(users[i]);
    }
  }
  return list_of_users;
}


let usersInfo = [
  {
    name: "Popescu",
    surname: "Ana",
    password: "ana_popescu",
    email: "anapopescu@google.com"
  },
  {
    name: "Ungureanu",
    surname: "Dumitru",
    password: "dumi",
    email: "dumitruungureanu@yahoo.com"
  },
  {
    name: "Cretu",
    surname: "Irina",
    password: "irina/cretu",
    email: "irina-cretu@yahoo.com"
  }
]

console.log(myFunction(usersInfo));
