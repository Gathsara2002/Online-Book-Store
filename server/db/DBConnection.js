const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

// const MONGODB_URL = process.env.MONGODB_URL;

const db = async () => {

    try {

        const con = await mongoose.connect(MONGODB_URL);
        console.info(`Mongo DB connected to: ${con.connection.host}`);

    } catch (error) {
        console.error(error);
    }

}

module.exports = db;