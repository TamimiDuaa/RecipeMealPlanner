const mongoose = require('mongoose');

const kitchenSchema = mongoose.Schema({
    ingredient:[{
        type: mongoose.Types.ObjectId,
        ref:'Ingredient'
    }],
    userId:{
        type: mongoose.Types.ObjectId,
        ref:'User'
    },
    isAvailable:Boolean,
    expiredDate:Date,
    shopDate:{
        type:Date,
        default:Date.now
    }
})

const myKitchen = mongoose.model('MyKitchen',kitchenSchema);

module.exports = myKitchen