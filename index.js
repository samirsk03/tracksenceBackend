import express from "express";
import cors from "cors";
import dotenv, { config } from "dotenv";
import connectDB from "./config/connectDB.js";
import contactRoute from "./routes/contactRoute.js"

const app = express()
const port = 3000


dotenv.config();
connectDB()

// cors for all routes
app.use(cors());

// Middleware to parse JSON
app.use(express.json());



app.get('/', (req, res) => {
  res.send('Hello World!')
})

// base contact routes
app.use('/api/contact',contactRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

