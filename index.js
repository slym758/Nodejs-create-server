const http = require("http");

const server = http.createServer((req, res) => {
  console.log("bir istek gönderildi");
  const url = req.url;

  if (url === "/") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>Index page</h2>");
  } else if (url === "/about") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>About page</h2>");
  } else if (url === "/contact") {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write("<h2>>Contact page</h2>");
  }

  res.end();
});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı`);
});
