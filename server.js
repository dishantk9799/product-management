// Module Imports
const app= require('./src/app');
const connectDB = require('./src/config/db');

// Configuration
const PORT=3001;

// Database Initialization
connectDB();

// Server
app.listen(PORT,()=>{
    console.log(`✅ Server is running on: http://localhost:${PORT}/`);
})