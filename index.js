const express = require("express");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PRODUCT_MODEL = require("./models/productSchema");
const DB = require("./connector/dbconnection");
const SubCat = require("./models/subcategory");
const Cat = require("./models/category");
const Groups = require("./models/groups");
const Brandsname = require("./models/brands");
app.use(cors());
const path = require("path");
app.use(express.json()); //to enable accepting body from frontend

app.get("/products", async (req, res) => {
  try {
let page= +req.query.page; 
let limit = 40;
let skip= (page-1)*limit;




    const products = await PRODUCT_MODEL.find({})
      .populate("category subcategory group brand")
      .skip(skip)
      .limit(limit)
     
      .sort({
        createdAt: -1,
      });
    res.json({ data: products, success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
    // res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/subcategory", async (req, res) => {
  try {
    const Subcategorys = await SubCat.find({})
      .populate("Category")
      .limit(50)
      .sort({
        createdAt: -1,
      });
    res.json({ data: Subcategorys, success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
    // res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/category", async (req, res) => {
  try {
    const category = await Cat.find({}).limit(50).sort({
      createdAt: -1,
    });
    res.json({ data: category, success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
    // res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/groups", async (req, res) => {
  try {
    const groups = await Groups.find({}).limit(50).sort({
      createdAt: -1,
    });
    res.json({ data: groups, success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
    // res.status(500).json({ error: "Something went wrong" });
  }
});
app.get("/brands", async (req, res) => {
  try {
    const brands = await Brandsname.find({}).limit(50).sort({
      createdAt: -1,
    });
    res.json({ data: brands, success: true });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, error: error.message });
    // res.status(500).json({ error: "Something went wrong" });
  }
});







//pagination
// let page = Number(req.query.page) || 1;
// let limit = Number(req.query.limit) || 50;
// let skip = (page-1) * limit;

// products = products.skip(skip).limit(limit);





app.post("/productpost", async (req, res) => {
  try {
    const newProduct = new PRODUCT_MODEL(req.body);
    await newProduct.save();
    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

DB();

const PORT = process.env.PORT || 8000;




if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname + "/client/build/index.html"),
      function (err) {
        if (err) {
          console.log(err);
        }
      }
    );
  });
}


app.listen(PORT, () => {
  console.log(`server is running at ${PORT}`);
});
