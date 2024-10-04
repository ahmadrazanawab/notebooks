const mongoose = require("mongoose");

const mongoUrl = "mongodb://127.0.0.1:27017/notebooks";

mongoose.set('strictQuery', false);
const mongodbToConnect = async (req, res) => {
    try {
        const mongodb = await mongoose.connect(mongoUrl, () => {
            console.log("Connected to mongodb successfully");
        })
        console.log(mongodb.connections.host);
    } catch (error) {
        console.log("mongodb connection Error ...", error);
    }
}

module.exports = mongodbToConnect;