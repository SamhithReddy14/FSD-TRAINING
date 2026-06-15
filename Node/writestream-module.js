const fs = require("fs");

const writeStream = fs.createWriteStream("stream-output.txt");

writeStream.write("First line written using write stream.\n");
writeStream.write("Second line written using write stream.\n");
writeStream.end();

writeStream.on("finish", function() {
    console.log("Writing completed.");
});
