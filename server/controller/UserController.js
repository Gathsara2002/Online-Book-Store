const model = require('../model/UserModel');
const nodemailer = require('nodemailer');
const {hashingPassword, createToken} = require("./AuthController");
const {compare} = require("bcrypt");


const UserController = {

    //get user details
    getUsers: async function (req, res, next) {
        try {

            const allUsers = await model.find();
            console.log(allUsers);
            res.status(200).json(allUsers);

        } catch (e) {
            res.status(500).json({
                error: "Users cant load " + e
            });
        }
    },

    //save user
    signUpUser: async function (req, res, next) {

        try {
            let body = req.body;
            let email =body.email;
            const user = await model.findOne({email});
            if (user) {
                res.status(401).json({
                    error: "User already saved!"
                });
            }
            body.userId = await UserController.generateNewUserId();
            body.password = await hashingPassword(body.password);
            console.log(body);
            let promise = await model.create(body);
            let token = createToken(body.userId);
            res.status(200).json({ user: promise, token: token });
            //await this.SendMail(body.email);

        } catch (err) {
            res.status(500).json({
                error: "User is not saved " + err
            });
        }
    },

    //login user
    loginUser: async function (req, res, next) {
        try {
            const {email, password} = req.body;
            console.log(email, password);
            const user = await model.findOne({email});
            if (!user) {
                res.status(401).json({
                    error: "Incorrect email"
                });
            }
            console.log(user)
            const match = await compare(password, user.password);
            if (!match) {
                res.status(401).json({
                    error: "Incorrect password"
                });
            }
            console.log(match)
            let token = createToken(user.userId);
            res.status(200).json({ user: user, token: token });
        } catch (err) {
            res.status(401).json({
                error: "Login Failed" + err
            });
        }
    },

    //delete user
    deleteUser: async function (req, res, next) {
        try {

            const id = req.params.id;
            const user = await model.deleteOne({userId: id});

            if (user.deletedCount === 0) {
                return res.status(404).json({
                    error: "User not found !"
                });
            }
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    }
    ,

//update user
    updateUser: async function (req, res, next) {
        try {

            const id = req.params.id;
            const body = req.body;

            const updatedUser = await model.findOneAndUpdate({
                    userId: id,
                }, body,
                {new: true}
            );

            if (!updatedUser) {
                return res.status(404).json({
                    error: "User not found !"
                });
            }

            res.status(200).json(updatedUser);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }

    }
    ,

//search user
    searchUser: async function (req, res, next) {
        try {

            const id = req.params.id;
            const user = await model.find({userId: id});
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    }
    ,

//send signup mail
    SendMail: async function (mail) {

        let transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'liviru2002mmg@gmail.com',
                pass: 'mm2002gl'
            }
        });

        let mailOptions = {
            from: 'liviru2002mmg@gmail.com',
            to: mail,
            subject: 'Welcome to ChapterOne',
            text: 'Hello world!',
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    }
    ,

    generateNewUserId: async function () {
        try {
            // Fetch all existing user IDs
            const users = await model.find({}, {userId: 1});
            const existingIds = users.map(user => user.userId);

            // Extract numeric parts and find the maximum
            const numericParts = existingIds.map(id => parseInt(id.replace('U', '')));
            let maxNumericPart = Math.max(...numericParts);

            if (maxNumericPart === -Infinity) {
                maxNumericPart = 0; // Start with 0 if no existing IDs
            }

            // Generate new ID
            const newNumericPart = (maxNumericPart + 1).toString().padStart(3, '0');
            return `U${newNumericPart}`;
        } catch (error) {
            throw new Error("Could not generate new user ID: " + error.message);
        }
    }

}

module.exports = UserController;