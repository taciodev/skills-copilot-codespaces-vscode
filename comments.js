// Create web server
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text' });
});    