const mongoose = require("mongoose");

const connectDb = async (connectionString) => {
    try {
        if (!connectionString) {
            throw new Error("Database connection string is required");
        }
        
        const connect = await mongoose.connect(connectionString);
        console.log(
            "Database connected:",
            connect.connection.host,
            connect.connection.name
        );
    } catch (err) {
        console.error("Database connection error:", err.message);
        process.exit(1);
    }
};

module.exports = connectDb;