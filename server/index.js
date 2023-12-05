import express from 'express';
import "dotenv/config.js";
import cors from 'cors';
import {connect} from 'mongoose'
import userRouter from './routes/user/user.js';
import studentRouter from './routes/students/students.js';
import countryRouter from "./routes/country/country.js"

const app = express();
const PORT = process.env.PORT || 5001;

//MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());

//ROUTES
app.use("/api/auth",userRouter);
app.use("/api/country",countryRouter);
app.use("/api/students",studentRouter);
app.use("/api/uploads/student",express.static("uploads/student"))

const start = async() => {
    await connect(process.env.DB_URL).then(() => {
        console.log(`DB ok`);
    }).catch(e => {
        throw e.message
    })
    app.listen(PORT,err => {
        if(err) {
            throw err
        }
        console.log(`Server started on ${PORT} port`);
    })
};

start();