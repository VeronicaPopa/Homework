/**
 * Write a signIn function which receives 3 parameters:

- username
- password
- role: a string with one of these values: 'student', 'teacher' or 'admin'

and prints to the console a welcome message.

If the username or password are not strings ➡ print a type error message
If the username or password are empty strings ➡ print an info message
If the role is missing, assume the role is student
Based on the role print a different message
See the example below for the appropriate messages. Also, to print things at the console use the console.log function.
Only one error message should be displayed.
 */



function signIn(username, password, role) {
  if (!username) {
    console.log("Please fill in the username");
    return;
  }
  if (!password) {
    console.log("Please fill in the password");
    return;
  }

  if (typeof username !== "string") {
    console.log("Username is not a string");
    return;
  }
  if (typeof password !== "string") {
    console.log("Password is not a string");
    return;
  }
  if (!role || role === "student") {
    console.log("Hi Bob! Welcome to the app. Let's get studying");
    return;
  }
  if (role === "teacher") {
    console.log("Hi Lizz! Welcome to the app. Let's get teaching");
    return;
  }
  if (role === "admin") {
    console.log("Hi Frank! Welcome to the app. Let's get managing");
    return;
  }

}
signIn(123, "123"); // TypeError: username is not a string
signIn("Bob", 1234); // TypeError password is not a string

signIn("", "1234", "unknown"); // Please fill in the username
signIn("Bob", ""); // Please fill in the password

signIn("Bob", "1234"); // Hi Bob! Welcome to the app. Let's get studying
signIn("Bob", "1234", "student"); // Hi Bob! Welcome to the app. Let's get studying

signIn("Lizz", "1234", "teacher"); // Hi Lizz! Welcome to the app. Let's get teaching

signIn("Frank", "1234", "admin"); // Hi Frank! Welcome to the app. Let's get managing
