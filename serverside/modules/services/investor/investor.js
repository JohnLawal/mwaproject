const Investor = require('../../respository/investor');
const bcrypt = require('bcrypt');
const { generateToken, decode } = require('../../../middlewares/jwt');

const service = module.exports;

/*  Required:
        params: [username]
*/
service.getInvestorByUsername = async function(req, res, next) {
    try {
        let username = req.params.username;
        let user = await Investor.findByUsername(username);
        res.json({ complete: true, data: user });
    } catch (err) {
        next(err);
    }
}

/*  Required: NONE
 */
service.getAllInvestors = async function(req, res, next) {
    try {
        let list = await Investor.find()
        res.json({ complete: true, data: list });
    } catch (err) {
        next(err);
    }
}

/*  Required:
        body: {validInvestorJSON}
*/
service.saveInvestor = async function(req, res, next) {
    // TODO: validate req.body?
    try {
        let investorInfo = req.body;
        let hashedPass = await bcrypt.hash(investorInfo.password, 10);
        investorInfo.password = hashedPass;
        console.log(investorInfo);
        let newInvestor = new Investor(investorInfo);
        let savedData = await newInvestor.save();

        const token1 = generateToken({ username: req.body.username, email: req.body.email, role: 'investor' });
        // res.header("Authorization", "Bearer "+token);
        //  response.status(200).json({ message: "successfully", key: token });
        res.json({ complete: true, token: token1 });
    } catch (err) {
        console.log(err);
        next(err);
    }

}

/*  Required:
        params: [username]
        body : {validInvestorJSON}
*/
service.updateInvestor = async function(req, res, next) {
    // TODO
    try {
        let username = req.params.username;
        let userData = req.body;
        if (userData.password) {
            console.log("new Password detected")
            let hashedPassword = await bcrypt.hash(userData.password, 10);
            userData.password = hashedPassword;
        }
        console.log("new data === " + JSON.stringify(userData));
        await Investor.update({ 'username': username }, userData);
        res.json({ complete: true, data: null });
    } catch (err) {
        next(err);
    }

}

/*  Required:
        params: [username]
*/
service.deleteInvestor = async function(req, res, next) {
    // TODO
    console.log("...delete");
    try {
        let username = req.params.username;
        let removed = await Investor.remove({ 'username': username });
        console.log("..removed " + removed);
        res.json({ complete: true, data: removed });

    } catch (err) {
        next(err);
    }
}


service.login = function(request, response, next) {

    try {

        Investor.findOne({ username: request.body.username }, (err, data) => {

            try {
                if (err) {
                    response.status(500).json({ status: 500, message: "Error " + err });
                } else if (!data) {
                    response.status(500).json({ status: 400, message: "Sorry, User Not Found" });
                } else {
                    if (bcrypt.compareSync(request.body.password, data.password)) {

                        const token1 = generateToken({ username: request.body.username, email: request.body.email, role: 'investor' });
                        response.json({ complete: true, token: token1 });

                    } else {
                        response.status(400).json({ status: 400, message: 'Incorrect username or password' });
                    }
                }

            } catch (error) {
                response.status(400).json({ status: 400, message: 'Error occured, ' + error });

            }

        })


    } catch (error) {
        response.status(400).json({ status: 400, message: 'Error occured, ' + error });
    }

}