var shortid = require('shortid');
// To generate a unique ID, use shortid.generate()

const trace = (req, res, next) =>{
    req['trace'] = {
        id:shortid(), // usamos la dependecia de arriba para generar un id 
        timestamp: new Date().getTime(), //aqui se esta dando el tiempo en el que se hizo la consulta
        path: req.baseUrl 
    };
// Agregando la cabecera a la respuesta.
    res.setHeader('x-request-id', shortid());
    next();
}

module.exports = trace;
