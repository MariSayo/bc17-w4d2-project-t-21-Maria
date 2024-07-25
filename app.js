import express from "express";
import helmet from "helmet";
import uuid4 from "uuid4";
import { getActivities, createActivities } from "./functions/functions.js";
const app = express();
const port = 3000;
app.use(helmet());

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("Hello world!");
});

app.get("/activities", async (req, res) => {
  try {
    const activity = await getActivities();
    res.status(200).json({
      success: true,
      payload: activity,
    });
  } catch (error) {
    res.status(500).send("Oops the status code is 500");
  }
});

app.post("/activities", async (req, res) => {
  try {
    //if any of these conditions are true then we don't want to continue
	if (Object.keys(req.body).length === 0 || !("activity_type" in req.body) || !("activity_duration" in req.body) ) {
      res.status(400).json({
        success: false,
        payload: null,
      })
    } else {
    // add validation to make sure activity type and duration is entered and save permenantly
    const completedActivities = {
      ...req.body,
      id: uuid4(),
      activity_submitted: Date.now(),
    };
    const activity = await createActivities(completedActivities);
    res.status(200).json({
      success: true,
      payload: activity,
    });
	}
  } catch (error) {
    res.status(500).send("Oops the status code is 500");
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
