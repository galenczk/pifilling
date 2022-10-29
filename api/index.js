// Import dependencies
import express from "express";
import asyncHandler from "express-async-handler";
import cors from "cors";
import bodyParser from "body-parser";
import helmet from "helmet";
import morgan from "morgan";

// Init express app
const app = express();
const PORT = process.env.PORT;
//app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use(helmet())
app.use(bodyParser.json())
app.use(cors());
app.use(morgan('combined'))

const message = {
  title: "This is a message from Galen!"
}

app.post(
  "/api",
  asyncHandler(async (req, res) => {
    const message = req.body
    console.log(message)
    res.status(205).json({ Message: "Message received." });
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
