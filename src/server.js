const http = require('http');
const fs = require('fs');
const url = require('url');

const htmlHandler = require('./htmlHandler.js');
const JSONHandler = require('./jsonHandler.js');
const XMLHandler = require('./xmlHandler.js');
const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
    const parsedURL = url.parse(request.url);
    /*const contentType = request.getHeader('Accept');
    if(contentType === 'application/xml'){
        if(parsedURL.pathname === '/'){
            htmlHandler.getIndex(request, response);
        } else if(parsedURL.pathname === '/style.css'){
            htmlHandler.getCSS(request, response);
        } else if(parsedURL.pathname === '/success'){
            XMLHandler.success(request, response);
        } else if(parsedURL.pathname === '/badRequest'){
            XMLHandler.badRequest(request, response);
        } else if(parsedURL.pathname === '/unauthorized'){
            XMLHandler.unauthorized(request, response);
        } else if(parsedURL.pathname === '/forbidden'){
            XMLHandler.forbidden(request, response);
        } else if(parsedURL.pathname === '/internal'){
            XMLHandler.internal(request, response);
        } else if(parsedURL.pathname === '/notImplemented'){
            XMLHandler.notImplemented(request, response);
        } else {
            XMLHandler.notFound(request, response);
        }
    
    }
    else{    /**/
        if(parsedURL.pathname === '/'){
            htmlHandler.getIndex(request, response);
        } else if(parsedURL.pathname === '/style.css'){
            htmlHandler.getCSS(request, response);
        } else if(parsedURL.pathname === '/success'){
            JSONHandler.success(request, response);
        } else if(parsedURL.pathname === '/badRequest'){
            JSONHandler.badRequest(request, response);
        } else if(parsedURL.pathname === '/unauthorized'){
            JSONHandler.unauthorized(request, response);
        } else if(parsedURL.pathname === '/forbidden'){
            JSONHandler.forbidden(request, response);
        } else if(parsedURL.pathname === '/internal'){
            JSONHandler.internal(request, response);
        } else if(parsedURL.pathname === '/notImplemented'){
            JSONHandler.notImplemented(request, response);
        } else {
            JSONHandler.notFound(request, response);
        }
    //}/**/
    console.dir(parsedURL);
};

http.createServer(onRequest).listen(port);

console.log(`Listening on 127.0.0.1: ${port}`);