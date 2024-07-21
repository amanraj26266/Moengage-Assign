const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    console.log("Connecting to MongoDB");
    console.log(process.env.MONGO_URL);
    const response = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed");
    console.log(error);
  }
};

module.exports = connectDb;
