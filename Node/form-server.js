const http = require("http");
const fs = require("fs");
const path = require("path");
const querystring = require("querystring");

const PORT = 3000;
const submissionsFile = path.join(__dirname, "form-submissions.json");

function sendFile(res, filePath, contentType) {
    fs.readFile(filePath, function(error, content) {
        if (error) {
            res.writeHead(500, { "Content-Type": "text/plain" });
            res.end("Server error");
            return;
        }

        res.writeHead(200, { "Content-Type": contentType });
        res.end(content);
    });
}

function saveSubmission(data, callback) {
    fs.readFile(submissionsFile, "utf8", function(readError, fileContent) {
        let submissions = [];

        if (!readError && fileContent.trim() !== "") {
            submissions = JSON.parse(fileContent);
        }

        submissions.push({
            ...data,
            submittedAt: new Date().toISOString()
        });

        fs.writeFile(submissionsFile, JSON.stringify(submissions, null, 2), callback);
    });
}

const server = http.createServer(function(req, res) {
    if (req.method === "GET" && req.url === "/") {
        sendFile(res, path.join(__dirname, "public", "index.html"), "text/html");
        return;
    }

    if (req.method === "GET" && req.url === "/style.css") {
        sendFile(res, path.join(__dirname, "public", "style.css"), "text/css");
        return;
    }

    if (req.method === "POST" && req.url === "/submit") {
        let body = "";

        req.on("data", function(chunk) {
            body += chunk.toString();
        });

        req.on("end", function() {
            const formData = querystring.parse(body);

            saveSubmission(formData, function(error) {
                if (error) {
                    res.writeHead(500, { "Content-Type": "text/html" });
                    res.end("<h1>Could not save form data.</h1>");
                    return;
                }

                res.writeHead(200, { "Content-Type": "text/html" });
                res.end(`
                    <h1>Form submitted successfully!</h1>
                    <p>Thank you, ${formData.name}.</p>
                    <a href="/">Go back</a>
                `);
            });
        });

        return;
    }

    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Page not found");
});

server.listen(PORT, function() {
    console.log("Form server running at http://localhost:" + PORT);
});
