const express = require("express");

const cors = require("cors");

const app = express();
app.use(cors());
app.get("/api/encription", (req, res) => {
  const todo = {
    hehe: "hehe",
    haha: "haha",
  };
  res.json(todo);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
