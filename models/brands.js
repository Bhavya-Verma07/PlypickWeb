const mongoose = require("mongoose");

const BrandsSchema = mongoose.Schema(
  {
    Category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    SubCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subcategories",
    },
    group:{
        type: mongoose.Schema.Types.ObjectId,
      ref: "groups",
    },
    Brand_name: String,
    Brand_image: String,
  },
  { timestamps: true }
);

const Brandsname = mongoose.model("brands", BrandsSchema);
module.exports = Brandsname;
