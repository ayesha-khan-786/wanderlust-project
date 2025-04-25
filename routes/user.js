const express = require("express");
const router = express.Router();
const User = require("../models/user.js");
const wrapAsync = require("../utils/wrapAsync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");

const userController = require("../controllers/users.js");


//58.  Router.route = Signup

router
    .route("/signup")
    .get((userController.renderSignupForm))
    .post(wrapAsync(userController.signup));

//58. Router.route = Login

router
    .route("/login")
    .get((userController.renderLoginForm))
    .post( 

        saveRedirectUrl,

        passport.authenticate("local", { 
        failureRedirect: "/login", 
        failureFlash: true 
        }) ,
        userController.login
    );


// LogOut User

router.get("/logout", (userController.logout));



module.exports = router;