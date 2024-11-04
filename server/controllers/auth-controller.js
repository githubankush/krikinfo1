const userModel = require("../model/user")
const bcrypt = require("bcrypt");
const home = async (req,res) =>{
    try{
        res.send("HOME");
    }
    catch(err){
        console.log(err);
    }
    
}

const register = async (req,res) => {
    try{
        const {username, email, password, phone} = req.body;

        const userExist = await userModel.findOne({username});
        if(userExist){
            res.status(400).json({message: "User already exist"});
        }
        
    
        const userCreated = await userModel.create({username, email, password, phone});
        console.log("USER CREATED: ", userCreated);
        res.status(200).json({
            message: "Registration Successful",
            token: await userCreated.generateToken(), 
            userId: userCreated._id.toString()
            }
        );
        
        
    
    }catch(err){
        console.log(err);
        
    }
}

const login =  async(req,res) =>{

    try{
        const {username, password} = req.body;
        const user = await userModel.findOne({username});
        if(!user){
            res.status(400).json({message: "User not found"});
        }
        const isPasswordMatch = user.comparePassword(password)
        if(!isPasswordMatch){
            res.status(400).json({message: "Password not match"});
        }
        res.status(200).json({
            message: "Login Successful",
            token: await user.generateToken(), 
            userId: user._id.toString()
            }
        );
    }
    catch(err){
        console.log("Error in Login", err);
    }
}
module.exports = {
    home,
    register,
    login

}