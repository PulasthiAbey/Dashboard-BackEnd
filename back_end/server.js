const http = require("http");
const PORT = process.env.PORT || 3001;
const app = require("./api/app/app");
const server = http.createServer(app);

server.listen(PORT);
