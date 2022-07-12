const express = require('express');
require('dotenv').config();
const app = express();
const cors = require("cors");
const connection = require('./db');
const userRoutes = require('./routes/users')
const authRoutes = require('./routes/auth')
const qRoutes = require('./routes/questions')
const getRoute = require('./routes/get')
const getUser = require('./routes/getuser')
const commentRoutes = require('./routes/comment')
const getComment = require('./routes/getcomment')



//database connection
connection()

//middlewares
app.use(express.json());
app.use(cors());


//routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/question", qRoutes);
app.use("/api",getRoute);
app.use("/api/getuser",getUser);
app.use("/api/comment",commentRoutes);
app.use("/api/getcomment",getComment);



const PORT = 8080;
app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`);
})