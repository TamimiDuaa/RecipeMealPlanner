require('dotenv').config();
const mongoose = require('mongoose');

const connectToDB = ()=>{
    try{
        mongoose.connect(process.env.ATLAS_URI);
        console.log('Database Connected');
    }
    catch(e){
        console.log(e);
    }
}
module.exports = connectToDB;