import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import studentRoutes from './routes/student.js';

const app = express(); //Makes an instance of the express package, or makes an object

app.use('/students', studentRoutes);

app.use(bodyParser.json({limit:"20mb", extended: true})); //Makes Express accept json
app.use(bodyParser.urlencoded({limit:"20mb", extended: true})); //Makes Express accept urlencoded

app.use(cors());//Initializes Cors

const CONNECTION_URL= 'mongodb+srv://mike:cook@cluster0.eqy83qg.mongodb.net/?retryWrites=true&w=majority';

const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL,{
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log('Connection is established and running on port: ${PORT}')
)).catch((err) => console.log(err.message));

// mongoose.set('useFindAndModify', false);