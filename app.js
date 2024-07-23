import express from "express";
import helmet from "helmet";
const app = express();
const port = 3000;
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
