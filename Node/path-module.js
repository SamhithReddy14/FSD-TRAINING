const path = require("path");

const filePath = path.join(__dirname, "notes", "demo.txt");

console.log("Full path:", filePath);
console.log("Folder name:", path.dirname(filePath));
console.log("File name:", path.basename(filePath));
console.log("Extension:", path.extname(filePath));
