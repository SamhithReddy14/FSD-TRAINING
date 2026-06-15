const EventEmitter = require("events");

const collegeEvents = new EventEmitter();

collegeEvents.on("registration", function(studentName) {
    console.log(studentName + " registered for the event.");
});

collegeEvents.emit("registration", "Sam");
collegeEvents.emit("registration", "Priya");
