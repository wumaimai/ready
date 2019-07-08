const http = require("http");
const route = require("./route");

const server = http.createServer((req, res)=>{
    route(req, res);
});

server.listen(3333, ()=>{
    console.log("start...3333");
});