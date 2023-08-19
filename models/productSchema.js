const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    group: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "groups",
    },
    brand: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "brands",
    },
    product_id: String,
    product_name: String,
    plyUnit: Number,
    labourPerFloor: Number,
    applicability: Number,
    loadingUnloadPrice: Number,
    product_description: String,
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    subcategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "subcategories",
    },
    plyid: String,
    desc: {
      color: [String],
      thickness: [String],
      finish: [String],
    },
    attrs: {
      imgs: [String],
    },
    averageRating: Number,
    var: {},
    randomInt: Number,
  },
  {
    timestamp: true,
  }
);

const Product = mongoose.model("products", ProductSchema);
module.exports = Product;
