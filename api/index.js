// Import dependencies
import express from "express";
import asyncHandler from "express-async-handler";
import cors from "cors";
import QuickChart from "quickchart-js";
//import bodyParser from "body-parser";


// Init express app
const app = express();
const PORT = process.env.PORT;
//app.use(express.json);
//app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.json())
app.use(cors());

const message = {
  title: "This is a message from Galen!"
}


// Chart logic
const newChart = new QuickChart()

newChart.setConfig({
  type: "pie",
  data: { labels: ['Hello world', 'Foo bar'], datasets: [{ label: 'Foo', data: [1, 2] }] }
}) 




// Route handlers
app.post(
  "/api",
  asyncHandler(async (req, res) => {
    res.status(205).send(newChart.getUrl);
  })
);

app.get(
  "/api",
  asyncHandler(async (req, res) => {
    res.status(201).json({ Message: "Message received." });
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.use((error, req, res, next) => {
  console.log(`Unhandled error ${error}, URL=${req.originalURL},
  method=${req.method}`);
  res.send("500 -- Server Error");
});
