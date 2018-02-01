'use strict';

const Hapi = require('hapi');

const server = new Hapi.Server();
server.connection({ port: process.env.port || 3000, host: 'localhost' });

server.start((err) => {

    if (err) {
        throw err;
    }
    console.log(`Server running at: ${server.info.uri}`);
});

server.on('response', (request) => {

    const logMsg = `${request.info.remoteAddress} : ${request.method.toUpperCase()} ${request.url.path} --> ${request.response.statusCode}`;

    if (request.response.statusCode >= 200 && request.response.statusCode < 399) {
        console.log(logMsg);
    }
    else {
        console.error(logMsg);
    }
});
