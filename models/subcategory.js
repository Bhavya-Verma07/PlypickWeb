const mongoose = require("mongoose");

const SubcategorySchema = mongoose.Schema({
  Sub_Category_name: String,
  
  Category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'categories'}
},
{timestamps:true});


const SubCat = mongoose.model("subcategories", SubcategorySchema);
module.exports= SubCat;