// require('dotenv').config({path: './.env'})
import dotenv from 'dotenv'
import connectDB from './db/db.js' 


// when we want to connect to the database in a separate file ie db.js, we can do it like this:

dotenv.config({
    path: './.env'
})
connectDB()










/*
// when the whole database is connected to the backend through mongoose in one file ie index.js. 


import express from 'express'
const app = express()

;(async() =>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on('error', (error) =>{
            console.log("ERROR: ", error);
            throw error;
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is running on port ${process.env.PORT}`);
        })
    }
    catch (error) {
        console.error("ERROR: ", error)}
})()

*/