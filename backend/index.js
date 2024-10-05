require('dotenv').config()
const cors = require('cors')
const express = require('express')
const app =express()
const PORT = process.env.PORT || 8000
const connectToDb = require('./config/connectToDB');
const userRoute = require('./routes/userRoute');
const shoppingListRoute = require('./routes/shoppingList');


connectToDb()

app.use(express.json())
app.use(cors({
    origin:true,
    credentials: true

}))

app.use('/users',userRoute);
app.use('/shoppingList',shoppingListRoute);

app.listen(PORT,()=>{
    console.log(`Your Server Started on http://localhost:${PORT}`);
})
