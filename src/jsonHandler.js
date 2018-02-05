const http = require('http');
const url = require('url');

const respondJSON = (request, response, status, Object) =>{
    
    
    const headers = {
        'Content-Type': 'application/json',
    }
    
    response.writeHead(status, headers);
    response.write(JSON.stringify(Object));
    response.end();
};

const respondJSONMeta = (request, response, status) => {
    
    const headers = {
        'Content-Type': 'application/json',
    }
    
    response.writeHead(status, headers);
    response.end();
};

const notFound = (request, response) => {
    
    const responseJSON = {
        message: 'The page you are looking for was not found',
        id: 'notFound',
    }

    respondJSON(request, response, 404, responseJSON);
};

const notFoundMeta = (request, response) => {
    respondJSONMeta(request, response, 404);
};

const success = (request, response) => {
    const responseJSON = {
        message: 'Success!',
    }
    
    respondJSON(request, response, 200, responseJSON)
};

const successMeta = (request, response) => {
    respondJSONMeta(request, response, 200);
};


const badRequest = (request, response) => {
    const parsedURL = url.parse(request.url);
    if(parsedURL.query === 'valid=true'){
        const responseJSON = {
            message: 'has the query',
        }
        return respondJSON(request, response, 200, responseJSON);
    }
    else{
        const responseJSON = {
            message: 'doesn\'t have the query',
            id: 'badRequest',
        }
        return respondJSON(request, response, 400, responseJSON);
    }
};

const badRequestMeta = (request, response) => {
    const parsedURL = url.parse(request.url);
    if(parsedURL.query === 'valid=true'){
        return respondJSONMeta(request, response, 200);
    } else {
        return respondJSONMeta(request, response, 400);
    }
};

const unauthorized = (request, response) => {
    const parsedURL = url.parse(request.url);
    if(parsedURL.query === 'loggedIn=yes'){
        const responseJSON = {
            message: 'has the query',
        }
        return respondJSON(request, response, 200, responseJSON);
    }
    else{
        const responseJSON = {
            message: 'doesn\'t have the query',
            id: 'unauthorized',
        }
        return respondJSON(request, response, 401, responseJSON);
    }
};

const unauthorizedMeta = (request, response) => {
    const parsedURL = url.parse(request.url);
    if(parsedURL.query === 'loggedIn=yes'){
        return respondJSONMeta(request, response, 200);
    } else {
        return respondJSONMeta(request, response, 400);
    }
};

const forbidden = (request, response) => {
    const responseJSON = {
        message: 'Forbidden!',
        id: 'forbidden',
    }
    
    respondJSON(request, response, 403, responseJSON)
};

const forbiddenMeta = (request, response) => {
    respondJSONMeta(request, response, 403);
};

const internal = (request, response) => {
    const responseJSON = {
        message: 'Internal',
        id: 'internal',
    }
    
    respondJSON(request, response, 500, responseJSON)
};

const internalMeta = (request, response) => {
    respondJSONMeta(request, response, 500);
};

const notImplemented = (request, response) => {
    const responseJSON = {
        message: 'This address has not been implemented yet',
        id: 'notImplemented',
    }
    
    respondJSON(request, response, 501, responseJSON)
};

const notImplementedMeta = (request, response) => {
    respondJSONMeta(request, response, 501);
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
    notImplemented,
    notImplementedMeta,
};