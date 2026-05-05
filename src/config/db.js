// Module Imports
let mongoose = require('mongoose');

// Database Connection Setup
let connectDB = async () => {
    try {
        let db = await mongoose.connect(`${process.env.MONGO_DB_URI}`);
        console.log(`📍 Database connected at host: ${db.connection.host}`);
    } catch (error) {
        console.log("Error in ConnectDB:", error.message);
    }
}

module.exports=connectDB;