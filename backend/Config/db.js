const mongoose = require('mongoose');

const connectDB = async() => {
    try {
        await mongoose.connect(process.env.MONGO_URL);
        console.log(`Mongodb database connected sucessfully ${mongoose.connection.host}`)
    } catch (error) {
        console.log(`Mongodb database errors ${error}`)
    }
}

module.exports = connectDB;