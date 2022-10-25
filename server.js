import express from "express";
import mongoose from "mongoose";
import { config } from './conf.js';
import path from "path";
import { fileURLToPath } from 'url';
import { router } from "./routes/router.js";
import bodyParser from "body-parser";
import cors from 'cors';

// create database connection
try {
    await mongoose.connect(config.database);
    console.log('Databse connected')
} catch (error) {
    console.error(error)
}

const app = express()
const PORT = 3000;


// static file middleware
const __filename = fileURLToPath(
    import.meta.url);
const __dirname = path.dirname(__filename)

app.use(express.static(path.join(__dirname, 'public')))

//middlewares
app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(bodyParser.json())

app.use(cors())

// routes
app.use(router)

// start the server 
app.listen(PORT, () => {
    console.log(`app is listening at localhost:${PORT}`)
})