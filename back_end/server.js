const http = require("http");
const PORT = process.env.PORT || 3001;


const app = require("./api/app/app");

// creating the server
const server = http.createServer(app);

server.listen(PORT);
