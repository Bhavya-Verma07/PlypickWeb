const mongoose = require("mongoose");

const categorySchema = mongoose.Schema({
  name: String,
  category_image: String,

},
{timestamps:true});


const Cat = mongoose.model("categories", categorySchema);
module.exports= Cat;