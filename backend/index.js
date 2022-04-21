const express = require('express');
require('dotenv').config();
const app = express();
const cors = require("cors");
const connection = require('./db');
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')

//database connection
connection()

//middlewares
app.use(express.json());
app.use(cors());


//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = 8080;
app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`);
})