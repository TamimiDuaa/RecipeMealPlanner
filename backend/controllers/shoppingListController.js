const asyncHandler = require('express-async-handler')

const shoppingList = require('../models/shoppingListModel');
const User = require('../models/userModel.js');

const fetchAllItems = asyncHandler(async (req,res)=>{

    const allItems =await shoppingList.find({userId: req.user.id});
    res.status(200).json({allItems:allItems});
    
})

const createNewItem =asyncHandler(async (req,res)=>{
    const name = req.body.name;
    const quantity=req.body.quantity;
    const category = req.body.category;
    const unit = req.body.unit;

    if(!name){
        throw new Error('Please fill the name field');
    }else if(!quantity){
        throw new Error('Please fill the quantity field');
    }else if(!category){
        throw new Error('Please select one of categories');
    }else if(!unit){
        throw new Error('Please select one of units');
    }

    try{
        const newItem = await shoppingList.create({
            name:name,
            quantity:quantity,
            category:category,
            unit:unit,
            userId: req.user.id
        });
        res.status(200).json({success:true, Item:newItem})
    }
    catch(e){
        res.status(400).json({success:false, userId: req.user.id})
    }
})
const updateItem =asyncHandler(async (req, res)=>{
    const itemId = req.params.id;

    const name = req.body.name;
    const quantity=req.body.quantity;
    const category = req.body.category;
    const unit = req.body.unit;
    
    const item = shoppingList.findById(itemId);
    
    if (!item) {
        res.status(400)
        throw new Error('Item not found')
      }
    
      // Check for user
      if (!req.user) {
        res.status(401)
        throw new Error('User not found')
      }
    
      // Make sure the logged in user matches the goal user
      if (item.userId.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
      }
    
    try{
        const updatedItem= await shoppingList.findByIdAndUpdate(itemId,{
            name:name,
            quantity:quantity,
            category:category,
            unit:unit
        })
        res.status(200).json({success:true, updatedItem:updatedItem})
    }
    catch(e){
        res.status(400).json({success:false})
    }
})
const deleteItem = asyncHandler(async (req, res)=>{
    const itemId = req.params.id;
    const item = shoppingList.findById(itemId);
    
    if (!item) {
        res.status(400)
        throw new Error('Item not found')
      }
    
      // Check for user
      if (!req.user) {
        res.status(401)
        throw new Error('User not found')
      }
    
      // Make sure the logged in user matches the item user
      if (item.userId.toString() !== req.user.id) {
        res.status(401)
        throw new Error('User not authorized')
      }
    try{
        const deletedItem = await shoppingList.findByIdAndDelete(itemId);
        res.json({success: true});
    }
    catch(e){
        res.json({success: false});

    }
})

const deleteAllItems = asyncHandler(async(req, res)=>{
    
      // Check for user
      if (!req.user) {
        res.status(401)
        throw new Error('User not found')
      }
    
      
    try{
        const deletedItem = await shoppingList.deleteMany({userId: req.user.id});
        res.json({success: true});
    }
    catch(e){
        res.json({success: false});

    }
})

module.exports = {
    fetchAllItems,
    createNewItem,
    updateItem,
    deleteItem,
    deleteAllItems
}