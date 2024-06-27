import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";

const createToken = (id) => {
    if (!process.env.SECRET) {
        throw new Error("JWT secret key not found in environment variables.");
    }
    return jwt.sign({id}, process.env.SECRET, {expiresIn: "5d"});
};

const hashingPassword = async (password) => {
    const saltRounds = 10;
    const salt = await bcrypt.genSalt(saltRounds);
    return bcrypt.hash(password, salt);
};

export default {createToken, hashingPassword};
