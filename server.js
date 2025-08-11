const express = require("express");
const dotenv = require("dotenv").config();
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");

// Connect to database
connectDb(process.env.CONNECTION_STRING);

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Routes
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

// Error handler middleware (must be last)
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});