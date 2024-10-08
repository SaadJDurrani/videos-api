import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  Liked: {
    type: [String],
  },
});

const UserModel = mongoose.model("user", userSchema);

export default UserModel;
