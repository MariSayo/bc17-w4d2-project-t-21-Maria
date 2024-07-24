import express from "express";
import helmet from "helmet";
import { getActivities, createActivities
 } from "./functions/functions.js";
const app = express();
const port = 3000;
app.use(helmet());

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.get("/activities", async (req, res) => {
  try {
    const activity = await getActivities();
    res.status(200).json(activity);
  } catch (error) {
    res.status(500).send("Oops the status code is 500");
  }
});


app.post("/activities", async (req, res)=> {
	try {
     const activity = await createActivities(req.body);
	 res.status(200).json(activity);
	} catch (error) {
		res.status(500).send("Oops the status code is 500");
	}
});










app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
