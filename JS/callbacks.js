// A callback is a function passed into another function.

function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback();
}

function sayWelcome() {
    console.log("Welcome to callback practice.");
}

function addTwoNumbers(a, b, callback) {
    var result = a + b;
    callback(result);
}

function showResult(answer) {
    console.log("The answer is: " + answer);
}

function practiceCallback() {
    console.log("Callback example started");

    greetUser("Student", sayWelcome);
    addTwoNumbers(10, 5, showResult);
}
