// Module Imports
let mongoose = require('mongoose');

// Database Connection Setup
let connectDB = async () => {
    try {
        let db = await mongoose.connect('mongodb+srv://dishantk9799_db_user:r5882BDEdnrUPPV3@cluster0.5k8jnu9.mongodb.net/?appName=Cluster0/');
        console.log(`📍 Database connected at host: ${db.connection.host}`);
    } catch (error) {
        console.log("Error in ConnectDB:", error.message);
    }
}

module.exports=connectDB;