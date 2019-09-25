const { decode } = require('./jwt')

let checkToken = function(request, response, next){
    console.log("Recievied the following header ...");
    console.log(request.headers);
    let token = request.headers.authorization;
    console.log(request.headers);
    try {

        if (!token) {
            response.status(400).json({ status: 400, message: 'Error, Missing Token' });
        } else if (!decode(token)) {
            console.log(decode(token));
            response.status(400).json({ status: 400, message: 'Error, Invalid Token' });
        } else {
            let decodedToken = decode(token);
            console.log(decode(token));
            request.username = decodedToken.username;
            next();
        }
    } catch (error) {
        response.status(500).json({ status: 500, message: 'Error,' + error });
    }
}

module.exports = { checkToken };