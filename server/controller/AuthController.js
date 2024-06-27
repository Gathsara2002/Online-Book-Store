import jwt from "jsonwebtoken";

//create token
const createToken = (id) => {
    return jwt.sign({ id: id }, process.env.SECRET, { expiresIn: "5d" });
};

export default createToken;