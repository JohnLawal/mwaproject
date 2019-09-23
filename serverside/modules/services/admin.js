const adminSchema = require('../respository/admin')
const {generateToken, decode} = require('../../middlewares/jwt');

const bcrypt = require('bcrypt')

let saveAdmin = function(request,response,next){

    try {

        let pass = bcrypt.hashSync(request.body.password, 10);

        const admin = new adminSchema({
            firstName : request.body.firstName,
            lastName : request.body.lastName,
            username : request.body.username,
            email : request.body.email,
            password : pass,
            dateRegisterd : new Date()
    
        });
    
        admin.save((err, user) => {
            if (err) console.log("Error happened " + err);
            console.log("User has been saved successfully" + admin);
          });
          const token = generateToken({ username: request.body.username });
          response.header("Authorization", "Bearer "+token);
          response.status(200).json({ message: "successfully", key: token });
        
    } catch (error) {
      //  next(new Error(error))
        response.status(400).json({status : 400, message : 'Error occured, '+error});
    }
 
}

let getAdminInfo = function(request,response,next){

    try {
       const uname = request.params.username;
        adminSchema.findOne({username:uname },(err,data)=>{

            try {
                if(err){
                    response.status(500).json({status : 500 , message : "Error "+err});
                }else if(!data){
                    response.status(500).json({status : 400 , message : "Sorry, user could not be found"});
                }else{
                    response.status(200).json(data);
                }
                
            } catch (error) {
                response.status(400).json({status : 400, message : 'Error occured, '+error});

            }
           
        }) 
       

    } catch (error) {
        response.status(400).json({status : 400, message : 'Error occured, '+error});
    }
 
}

let changePassword = function(request,response,next){

    try {
        const currentPass = request.body.currentPass;
        const newPass = request.body.newPass;  
        const newPassHash = bcrypt.hashSync(newPass,10);
        let token = request.headers.authorization;
        
        const body = decode(token);
         
        adminSchema.findOne({username : body.username },(err,data)=>{

            try {
                if(err){
                    response.status(500).json({status : 500 , message : "Error "+err});
                }else if(!data){
                    response.status(500).json({status : 400 , message : "Sorry, user could not be found"});
                }else{
                    if(bcrypt.compareSync(currentPass,data.password)){
                      
                        adminSchema.updateOne({username : data.username},{password : newPassHash},(err)=>{
                             if(err) response.status(500).json({status : 500, message : 'Error, '+err});
                             response.status(200).json({status : 200, message : 'Password saved Sucessfully'});
                        });

                    }else{
                        response.status(400).json({status : 400, message : 'Incorrect current password'});
                    } 
                }
                
            } catch (error) {
                response.status(400).json({status : 400, message : 'Error occured, '+error});

            }
           
        }) 
       
    } catch (error) {
        response.status(400).json({status : 400, message : 'Error occured, '+error});
    }
 
}




let login = function(request,response,next){

    try {
 
        adminSchema.findOne({username : request.body.username },(err,data)=>{

            try {
                if(err){
                    response.status(500).json({status : 500 , message : "Error "+err});
                }else if(!data){
                    response.status(500).json({status : 400 , message : "Sorry, User Not Found"});
                }else{
                    if(bcrypt.compareSync(request.body.password,data.password)){

                        const token = generateToken({ username: data.username, role : 'admin'});
                        response.header("Authorization", "Bearer "+token);
                        response.status(200).json({ message: "successfully", message : 'user logged in sucessfully'});
                       
                    }else{
                        response.status(400).json({status : 400, message : 'Incorrect username or password'});
                    } 
                }
                
            } catch (error) {
                response.status(400).json({status : 400, message : 'Error occured, '+error});

            }
           
        }) 
         
        
    } catch (error) {
        response.status(400).json({status : 400, message : 'Error occured, '+error});
    }
 
}



module.exports ={saveAdmin, getAdminInfo,changePassword,login};