import mongoose = require("mongoose");

export async function configDB() {
  try {
    await mongoose.connect(
      process.env["DB_URI"] || "mongodb://127.0.0.1:27017/cloneApp"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error(error);
  }
}
