const fs = require("fs");

const readStream = fs.createReadStream("sample.txt", {
    encoding: "utf8",
    highWaterMark: 16
});

readStream.on("data", function(chunk) {
    console.log("Small chunk:", chunk);
});

readStream.on("error", function(error) {
    console.log("Read stream error:", error.message);
});
