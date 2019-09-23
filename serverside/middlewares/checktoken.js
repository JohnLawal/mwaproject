const {decode} = require('./jwt')

let checkToken = function(request, response, next){
    let token = request.headers.authorization;
try {

    if(!token){
        response.status(400).json({status : 400, message : 'Error, Missing Token'});
    }else if (!decode(token)) {
        console.log(decode(token));
        response.status(400).json({status : 400, message : 'Error, Inavlid Token'});
    }else{
        next();
    }
} catch (error) {
    response.status(500).json({status : 500, message : 'Error,'+error});
}
}

module.exports = {checkToken};