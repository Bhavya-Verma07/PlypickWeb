const mongoose = require("mongoose");

// const mongoURI = "mongodb+srv://anshul93999:3V81bxUV6OfnvUvK@plypicker-testing.lwplrul.mongodb.net/test";
// mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true });

const connectdb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("mongodb connected");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectdb;
