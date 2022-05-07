import express from "express";
import mongoose from "mongoose";
import bodyParser from 'body-parser';
import usersRoutes from './routes/users.js';
import 'dotenv/config';
const app = express();
const PORT = 5000;

//conect to database
mongoose.connect(process.env.DB_CONNECTION, {useNewUrlParser: true});
const db = mongoose.connection;
db.on('error',(error) => {
    console.log('cannot connect to db');
})
db.once('connected',() => {
    console.log('connected to db');
})


app.use(bodyParser.json());

app.use('/users',usersRoutes);

app.listen(PORT,() => {
    console.log(`SERVER RUNNING ON PORT: ${PORT}`);
})