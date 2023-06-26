const express = require("express");
const app = express();

const port = process.env.PORT || 4000;

app.get("/hi", (req, res) => {
  res.send("Hello this is my first service");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
