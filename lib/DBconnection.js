const mongoose = require("mongoose");

export const DBconnection = async () => {
  try {
    mongoose.connect(process.env.MONGO_URL).then(() => {
      console.log("connected to database successfully!");
    });
  } catch (error) {
    console.log(error);
  }
};
