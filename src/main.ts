import "./absolutePathAlias"; // Always import at the top

import * as cors from "cors";
import * as express from "express";
import {
  addUserToDb,
  getAllUsers,
  getAllVideos,
  getUserById,
} from "./Controllers";
import { configDB } from "./db.config";

const PORT = process.env["PORT"] || 4000;
const app = express();

app.use(express.json());
app.use(cors());
app.listen(PORT, () => {
  console.log(`App listening at http://127.0.0.1:${PORT}`);
});

configDB();

app.get("/videos", getAllVideos);
app.get("/users", getAllUsers);
app.get("/users/:id", getUserById);
app.post("/users", addUserToDb);

// app.post("/video", (req, res) => {
//   console.log(req.body);
//   res.send({ videoURL: "hdashdhsadh", payload: req.body });
// });
