// A promise is used for work that may finish later.
// It can be resolved when successful or rejected when failed.

function checkMarks(marks) {
    return new Promise(function(resolve, reject) {
        if (marks >= 40) {
            resolve("Pass");
        } else {
            reject("Fail");
        }
    });
}

function practicePromiseSuccess() {
    console.log("Promise success example started");

    checkMarks(75)
        .then(function(result) {
            console.log("Result: " + result);
        })
        .catch(function(error) {
            console.log("Error: " + error);
        });
}

function practicePromiseError() {
    console.log("Promise error example started");

    checkMarks(25)
        .then(function(result) {
            console.log("Result: " + result);
        })
        .catch(function(error) {
            console.log("Error: " + error);
        });
}
