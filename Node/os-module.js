const os = require("os");

console.log("Platform:", os.platform());
console.log("CPU architecture:", os.arch());
console.log("Total memory:", os.totalmem());
console.log("Free memory:", os.freemem());
console.log("Home directory:", os.homedir());
console.log("User info:", os.userInfo());
