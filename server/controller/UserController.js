const model = require('../model/UserModel');

const UserController = {

    //save user
    saveUser: async function (req, res, next) {
        try {
            let body = req.body;
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