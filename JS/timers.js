// setTimeout runs code once after a delay.
// setInterval runs code again and again after a delay.

var counter = 0;
var counterId = null;

function practiceSetTimeout() {
    console.log("setTimeout example started");

    setTimeout(function() {
        console.log("This message appears after 2 seconds.");
    }, 2000);
}

function startCounter() {
    if (counterId !== null) {
        console.log("Counter is already running.");
        return;
    }

    console.log("setInterval counter started");

    counterId = setInterval(function() {
        counter++;
        console.log("Counter: " + counter);
    }, 1000);
}

function stopCounter() {
    if (counterId === null) {
        console.log("Counter is not running.");
        return;
    }

    clearInterval(counterId);
    counterId = null;
    console.log("setInterval counter stopped");
}
