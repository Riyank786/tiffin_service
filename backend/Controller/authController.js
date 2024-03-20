const userModel = require('../Model/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const registerController = async(req, res) => {
    try {
        const exisitingUser = await userModel.findOne({ email: req.body.email });
        //validation
        if (exisitingUser) {
            return res.status(200).send({
                success: false,
                message: "User ALready exists",
            });
        }
        //hash password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);
        const hashedConfirmPassword = await bcrypt.hash(req.body.confirmPassword, salt);
        req.body.password = hashedPassword;
        req.body.confirmPassword = hashedConfirmPassword;
        //rest data
        const user = new userModel(req.body);
        await user.save();
        return res.status(201).send({
            success: true,
            message: "User Registerd Successfully",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            success: false,
            message: "Error In Register api",
            error
        });
    }
};

const loginController = async(req, res) => {
    try {
        const data = await userModel.findOne({ email: req.body.email });
        if (!data) {
            return res.status(500).send({
                message: "invalid user"
            })
        }
        if (data.role !== req.body.role) {
            return res.status(500).send({
                message: "role does not match"
            })
        }
        const comparePassword = await bcrypt.compare(req.body.password, data.password);
        if (!comparePassword) {
            return res.status(500).send({
                message: "invalid user"
            })
        }
        const token = jwt.sign({ user_id: data._id }, "dhruvin", { expiresIn: "2d" })
        return res.status(200).send({
            message: "login successfully",
            token,
            data
        })
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: "error in login api"
        })
    }
};

const currentUserController = async(req, res) => {
    try {
        const user = await userModels.findOne({ _id: req.body.user_id })
        return res.status(200).send({
            message: "user sucessfully access",
            user
        })
    } catch (error) {
        return res.status(500).send({
            message: "user can not access",
            error
        })
    }
}

module.exports = { registerController, loginController, currentUserController }