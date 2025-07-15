const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const server = http.createServer((req, res) => {
  let filePath;
  let contentType;
  if (req.url === "/index.js" || req.url === "/index.js/") {
    filePath = path.resolve(__dirname, "index.js");
    contentType = "application/javascript";
  } else {
    filePath = path.resolve(__dirname, "index.html");
    contentType = "text/html";
  }
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end(`Error loading ${path.basename(filePath)}`);
      return;
    }
    res.writeHead(200, { "Content-Type": contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
