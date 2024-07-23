import express from "express";
import helmet from "helmet";
const app = express();
const port = 3000;
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});
let data = [{
	"id": "54321234", // UUID
	"activity_submitted": "1719486190058", // simple Epoc timestamp (Date.now() in JS)
	"activity_type": "run", // choose some standard types
	"activity_duration": "30", // choose standard unit type (minutes probably)
}]

app.get("/activities", (req, res) => {
  res.status(200).send(data)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
