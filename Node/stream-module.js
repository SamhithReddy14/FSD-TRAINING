const fs = require("fs");

const readStream = fs.createReadStream("sample.txt", "utf8");

readStream.on("data", function(chunk) {
    console.log("Received chunk:");
    console.log(chunk);
});

readStream.on("end", function() {
    console.log("Finished reading file with stream.");
});
