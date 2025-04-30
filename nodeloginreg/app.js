const fs = require("fs").promises;
const http = require("http");
const port = 3001;
const server = http.createServer((req, res) => {
  //res.end("Welcome to Node server!");

  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-method', 'GET,POST,DELETE,PUT,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method == "OPTIONS") {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    return res.end();
  }

  if (req.url == "/register" && req.method == "POST") {
    let body = "";
    let arr = [];
    req.on("data", (chunk) => {
      body += chunk;
    });
    req.on("end", async () => {
      try {
        console.log(body);
        const { name, email, password } = JSON.parse(body);
        console.log(name);

        const data = await fs.readFile("student.json", { encoding: "utf-8" });
        arr = JSON.parse(data);
        const status = arr.find((ele) => ele.email == email);
        if (status) {
          return res.end(
            JSON.stringfy({ message: "Email is already registered" })
          );
        } else {
          arr.push({ name, email, password });
          await fs.writeFile("student.json", JSON.stringify(arr, null, 2));
          res.end(
            JSON.stringify({ message: "Registration successfully completed" })
          );
        }
      } catch (e) {
        console.log("Error while registering" + e);
      }
    });
    res.end(JSON.stringify({ message: "Successfully registered" }));
  }
  if (req.url == "/login" && req.method == "POST") {
    let body = '';
    let arr = [];
    req.on('data', chunk => {
      body += chunk;
    })
    req.on('end', async() => {
      try {
        console.log(body)
        const { email, password } = JSON.parse(body);
        const data = await fs.readFile("student.json", { encoding: "utf-8" });
        arr = JSON.parse(data);
        const status = arr.find((ele) => ele.email == email && ele.password==password);
        if (status) {
          return res.end(
            JSON.stringify({ message: "Success" })
          );
        } else {
          res.end(JSON.stringify({ "message": "Invalid User" }));
        }
      } catch (e) {
        res.end(JSON.stringify({ "message": e.message }));
      }
      console.log(body);
    })
  }
  
});
server.listen(port, () => {
  console.log("Server listening on port " + port);
});
