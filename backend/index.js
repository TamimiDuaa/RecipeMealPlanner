require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app =express()
const PORT = process.env.PORT || 8000
const connectToDb = require('./config/connectToDB')
connectToDb()

app.use(express.json())
app.use(cors({
    origin:true,
    credentials: true

}))

app.listen(PORT,()=>{
    console.log(`Your Server Started on http://localhost:${PORT}`);
})
