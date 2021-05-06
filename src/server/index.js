const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

app.use(express.static(process.cwd() + "/src/projects/"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

app.get("/drumkit", (req, res) => {
  res.sendFile(
    path.join(
      process.cwd() + "/src/projects/01 - JavaScript Drum Kit/index-START.html"
    )
  );
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
