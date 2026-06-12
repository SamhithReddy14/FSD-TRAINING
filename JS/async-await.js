// async and await make promises easier to read.

function getCourseName() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve("JavaScript Basics");
        }, 1000);
    });
}

async function practiceAsyncAwait() {
    console.log("Async await example started");
    console.log("Waiting for course name...");

    var courseName = await getCourseName();

    console.log("Course name is: " + courseName);
}
