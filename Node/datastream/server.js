const http  = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
    if(req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end("Home Page");
    }
    if(req.url === "/about") {
        let datastream = fs.readFileSync("file.txt", "utf8");
        res.writeHead(200, { "Content-Type": "text/plain" });
        res.end(datastream);
    }
});
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});