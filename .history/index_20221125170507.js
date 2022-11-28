const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.post("/api/encription", (req, res) => {
  console.log(req.body);
  res.json(user);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
