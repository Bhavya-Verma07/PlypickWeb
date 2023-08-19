const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  Group_name: String,
  Sub_Category:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'subcategories'},
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories'}
},
{timestamps:true});


const Groups = mongoose.model("groups", groupSchema);
module.exports= Groups;