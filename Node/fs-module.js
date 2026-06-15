const fs = require("fs");

const fileName = "sample.txt";

fs.writeFileSync(fileName, "Hello from the fs module.\n");

fs.appendFileSync(fileName, "This line was added later.\n");

const data = fs.readFileSync(fileName, "utf8");
console.log(data);

console.log("Does file exist?", fs.existsSync(fileName));
