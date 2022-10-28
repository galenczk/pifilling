// Import dependencies
import "dotenv/config";
import express from "express";
import asyncHandler from "express-async-handler";

// Init express app
const app = express();
const PORT = process.env.PORT;
app.use(express.json);
app.use(express.urlencoded({ extended: false }));

app.post(
  "/pifilling",
  asyncHandler(async (req, res) => {
    res.status(201).json({ Message: "Message received." });
  })
);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

app.use((error, req, res, next) => {
  console.log(`Unhandled error ${error}, URL=${req.originalURL},
  method=${req.method}`)
  res.send("500 -- Server Error")
})
