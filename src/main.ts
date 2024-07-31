import "./absolutePathAlias"; // Always import at the top

import * as express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());
app.listen(PORT, () => {
  console.log(`App listening at http://127.0.0.1:${PORT}`);
});

function getController(_req: express.Request, res: express.Response) {
  res.send("Hello World");
}
app.get("/", getController);
app.get("/user/:name", (req, res) => {
  // @ts-ignore
  res.send({ path: req.params.name, query: req.query.qp });
});
app.get("/video", (_req, res) => {
  res.send({ videoURL: "hdashdhsadh" });
});

app.post("/video", (req, res) => {
  console.log(req.body);
  res.send({ videoURL: "hdashdhsadh", payload: req.body });
});
