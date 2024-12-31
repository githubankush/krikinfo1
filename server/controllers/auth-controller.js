const userModel = require("../model/user");

const home = async (req, res) => {
    try {
        res.send("HOME");
    } catch (err) {
        console.error("Error in home route:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const register = async (req, res) => {
    try {
        const { username, email, password, phone } = req.body;

        // Check if user already exists
        const userExist = await userModel.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists" });
        }

        // Create new user with hashed password
        const userCreated = await userModel.create({ username, email, password, phone });
        console.log("USER CREATED: ", userCreated);

        return res.status(201).json({
            message: "Registration Successful",
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });
    } catch (err) {
        console.error("Error in registration:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await userModel.findOne({ email });
        
        if (!user) {
            console.log("Login Error! User not found");
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordMatch = await user.comparePassword(password);
        if (!isPasswordMatch) {
            return res.status(400).json({ message: "Password does not match" });
        }

        return res.status(200).json({
            message: "Login Successful",
            token: await user.generateToken(),
            userId: user._id.toString(),
        });
    } catch (err) {
        console.error("Error in Login:", err);
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const logout = async (req, res) => {
    try{
            alert("LOGOUT SUCCESSFUL");
            return res.status(200).json({message: "Logout Successful"});
    }
    catch(error)
    {
        console.log("Error in Logout Controller: ", error);
    }
}

module.exports = {
    home,
    register,
    login,
    logout,
};
