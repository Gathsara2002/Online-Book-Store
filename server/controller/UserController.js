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
    },

    //delete user
    deleteUser: async function (req, res, next) {
        try {

            const id = req.params.id;
            const user = await model.deleteOne({id: id});

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
    },

    //update user
    updateUser: async function (req, res, next) {
        try {

            const id = req.params.id;
            const body = req.body;

            const updatedUser = await model.findOneAndUpdate({
                    id: id,
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

    },

    //search user
    searchUser: async function (req, res, next) {
        try {

            const id = req.params.id;
            const user = await model.find({id: id});
            res.status(200).json(user);

        } catch (error) {
            res.status(500).json({
                error: "Something went wrong ! " + error
            });
        }
    }

}

module.exports = UserController;