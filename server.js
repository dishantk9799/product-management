// Module Imports
const app= require('./src/app');
const connectDB = require('./src/config/db');

// Database Initialization
connectDB();

// Server
app.listen(process.env.PORT,()=>{
    console.log(`✅ Server is running on: http://localhost:${process.env.PORT}/`);
})