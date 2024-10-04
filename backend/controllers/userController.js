
const userModel = require('../models/userModel');

const fetchAllUsers =async (req,res)=>{
    const allusers =await userModel.find();
    res.json({allusers:allusers});
}

const fetchUserById =async (req,res)=>{
    const userId = req.params.id;
    const userById =await userModel.findById(userId)
    res.json({userById: userById});

}

const createNewUser =async (req,res)=>{
    const {name, email, password} = req.body;
    const newUser = await userModel.create({
        name,
        email,
        password
    });



}
const updateUser =async (req, res)=>{
    const userId = req.params.id;
    const {name, email, password} = req.body;
    const updatedUser =await userModel.findByIdAndUpdate(userId,{
        name:name,
        email:email,
        password: password
    })
    res.json({success: true, updateUser: updatedUser});
}
const deleteUser =async (req, res)=>{
    const userId = req.params.id;

    const deletedUser = await userModel.findByIdAndDelete(userId);
    res.json({success: true})
}

module.exports = {
    fetchAllUsers,
    fetchUserById,
    createNewUser,
    updateUser,
    deleteUser
}