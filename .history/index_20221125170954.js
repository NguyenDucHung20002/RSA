const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/encription", (req, res) => {
  const user = req.body;
  console.log("user:", user);
  res.json(user);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
