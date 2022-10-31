// Import dependencies
import express from "express";
import asyncHandler from "express-async-handler";
import cors from "cors";
import QuickChart from "quickchart-js";

// Init express app
const app = express();
const PORT = 3001;
//app.use(express.json);
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

// Init chart object
const newChart = new QuickChart();


// POST request with chart settings returns URL of rendered chart
app.post(
  "/api",
  asyncHandler(async (req, res) => {
    newChart.setConfig(
      
      {
      type: "doughnut",
      data: req.body,
      plugins: {
        datalabels: {
          display: false,
          backgroundColor: "#ffffff"
        }
      }



    }
    
    );
    newChart.type = "doughnut";
    console.log(req.body);
    res.status(200).json({ url: newChart.getUrl() });
  })
);

app.use((error, req, res, next) => {
  console.log(`Unhandled error ${error}, URL=${req.originalURL},
  method=${req.method}`);
  res.send("500 -- Server Error");
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});
