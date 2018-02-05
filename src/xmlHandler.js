const http = require('http');
const url = require('url');

const respondXML = (request, response, status, Object) =>{
    
    
    const headers = {
        'Content-Type': 'application/XML',
    }
    
    response.writeHead(status, headers);
    response.write(Object);
    response.end();
};

const respondXMLMeta = (request, response, status) => {
    
    const headers = {
        'Content-Type': 'application/XML',
    }
    
    response.writeHead(status, headers);
    response.end();
};

const notFound = (request, response) => {
    
    const responseXML = '<message>The page you are looking for was not found</message <id>notFound</id>'

    respondXML(request, response, 404, responseXML);
};

const notFoundMeta = (request, response) => {
    respondXMLMeta(request, response, 404);
};

const success = (request, response) => {
    const responseXML = '<message>Success!</message>'
    
    respondXML(request, response, 200, responseXML)
};

const successMeta = (request, response) => {
    respondXMLMeta(request, response, 200);
};


const badRequest = (request, response) => {
    const parsedURL = url.parse(request.url);
    if(parsedURL.query === 'valid=true'){
        const responseXML = '<message>has the query</message>';
        return respondXML(request, response, 200, responseXML);
    }
    else{
        const responseXML = '<message>doesnt have the query</message> <id>badRequest</id>';
        return respondXML(request, response, 400, responseXML);
    }
};

const badRequestMeta = (request, response) => {
    const parsedURL = url.parse(request.url);
    if(parsedURL.query === 'valid=true'){
        return respondXMLMeta(request, response, 200);
    } else {
        return respondXMLMeta(request, response, 400);
    }
};

const unauthorized = (request, response) => {
    const parsedURL = url.parse(request.url);
    if(parsedURL.query === 'loggedIn=yes'){
        const responseXML = '<message>has the query</message>'
        
        return respondXML(request, response, 200, responseXML);
    }
    else{
        const responseXML = '<message>doesnt have the query</message><id>unauthorized</id>'
        return respondXML(request, response, 401, responseXML);
    }
};

const unauthorizedMeta = (request, response) => {
    const parsedURL = url.parse(request.url);
    if(parsedURL.query === 'loggedIn=yes'){
        return respondXMLMeta(request, response, 200);
    } else {
        return respondXMLMeta(request, response, 400);
    }
};

const forbidden = (request, response) => {
    const responseXML = '<message>Forbidden!</message> <id>forbidden</id>'
    
    respondXML(request, response, 403, responseXML)
};

const forbiddenMeta = (request, response) => {
    respondXMLMeta(request, response, 403);
};

const internal = (request, response) => {
    const responseXML = '<message>Internal</message> <id>internal</id>'
    
    respondXML(request, response, 500, responseXML)
};

const internalMeta = (request, response) => {
    respondXMLMeta(request, response, 500);
};

const notImplemented = (request, response) => {
    const responseXML = '<message>This address has not been implemented yet</message><id>notImplemented</id>'
    
    respondXML(request, response, 501, responseXML)
};

const notImplementedMeta = (request, response) => {
    respondXMLMeta(request, response, 501);
};

module.exports = {
    notFound,
    notFoundMeta,
    success,
    successMeta,
    badRequest,
    badRequestMeta,
    unauthorized,
    unauthorizedMeta,
    forbidden,
    forbiddenMeta,
    internal,
    internalMeta,
};