const model = require('../model/UserModel');

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
    saveUser: async function (req, res, next) {
        try {

            let body = req.body;
            console.log(body);
            let promise = await model.create(body);
            res.status(200).json(promise);

        } catch (err) {
            res.status(500).json({
                error: "User is not saved " + err
            });
        }
    }

}

module.exports = UserController;