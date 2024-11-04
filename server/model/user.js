const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: Number
    }
})

userSchema.pre("save", async function (next) {
    const user = this;
    if (!user.isModified("password")) {
        next();
    }

    try{
        const saltRound = 10;
        const hashedPassword = await bcrypt.hash(user.password, saltRound);
        user.password = hashedPassword;
    }
    catch(err)
    {
        console.log("Error in hashing password")
        next();
        
    }

})

//generating token
userSchema.methods.generateToken = async function () {
    const user = this;
    try{
        return jwt.sign(
            { 
                userId: user._id.toString(),
                email: user.email,
            },

            process.env.JWT_SECRET_KEY,

            { 
                expiresIn: "30d"
            }

            );
    }
    catch(err)
    {
        console.log("Error in generating token");
    }
   
}
//compare password
userSchema.methods.comparePassword = async function (password) {
    const user = this;
    try{
        return await bcrypt.compare(password, user.password);
    }
    catch(err)
    {
        console.log("Error in comparing password");
    }
}



module.exports = mongoose.model("User", userSchema);