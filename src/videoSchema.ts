import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  id: {
    type: String,
  },
  videoUrl: {
    type: String,
  },
  title: {
    type: String,
  },
  thumbnailUrl: {
    type: String,
  },
});

const videoModel = mongoose.model("videos", videoSchema);

export default videoModel;
