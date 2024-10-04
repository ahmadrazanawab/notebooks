const express = require("express");
const router = express.Router();
const User = require("../Module/user.model");
const { validationResult, body } = require("express-validator");
const bcrypt = require("bcryptjs");
var jwt = require('jsonwebtoken');
var JWT_SECRET = "Ahmadraza@786";

const fetchUser = require("../middleware/fetchMiddleware");


// router create user method router
router.post('/createuser',
    [
        body('name', "Enter your name").isLength(),
        body('email', "Enter your email").isEmail(),
        body('password','Password must be at least 3 charecters').isLength({min:3})
    ],
    async (req, res) => {

    // get user details from frontend
    // validation - not empty
    // check if user alreardy exists: username, email
    // create user object - create entry i db
    // check for user creation 
    // return res
    
    try {
        let success = false;
        const { name, email, password } = req.body;
        let result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(404).json({ success, error: result.array()}); 
        }
        let emailExists = await User.findOne({ email });
        if (emailExists) {
            return res.status(404).json({ success, error:"Sorry a user with  this Email aleardy exists" }); 
        }

        let salt =await bcrypt.genSalt(10);
        let successPass = await bcrypt.hash(password, salt);

        const user = await User.create({
            name,
            email,
            password:successPass
        })

         data = {
            user:user.id
        }
        const authtoken = await jwt.sign(data,JWT_SECRET);
        res.json({ success: true, authtoken});
        
    } catch (error) {
        console.log(error.message);
        res.status(501).json("Something went to wrong");
    }
    });

// router- 2 method 
router.post('/login',
    [
        body('email', "Enter your email").isEmail(),
        body('password','Password must be at least 3 charecters').isLength({min:3})
    ],
    async (req, res) => {
        try {
            let success = false;
            const {email, password } = req.body;
            let result = validationResult(req);
            if (!result.isEmpty()) {
                return res.status(404).json({ success, error: result.array()}); 
            }
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ success, error:"Please try to Login with correct Credentiols" }); 
            }


            let passwordExists = await bcrypt.compare(password, user.password);
        if (!passwordExists) {
            return res.status(404).json({ success, error:"Please try to Login with correct Credentiols" }); 
            }
            
            data = {
                user:user.id
            }

            const authtoken = await jwt.sign(data,JWT_SECRET);
            res.json({ success: true, authtoken});
            
        } catch (error) {
            console.log(error.message);
            res.status(501).json("Something went to wrong");
        }
    });

// router - 3 method get
    router.post('/getuser',fetchUser,async (req, res) => {
            try {
                const userId = req.user.id;
                const user = await User.findById(userId).select("-password");
                res.send(user);
            } catch (error) {
                console.log(error.message);
                res.status(501).json("Something went to wrong");
            }
        });
    


module.exports = router;