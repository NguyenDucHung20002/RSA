const express = require("express");

const app = express();

app.get("/api/encrtiption", (req, res) => {
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
