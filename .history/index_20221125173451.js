const express = require("express");
const NodeRSA = require("node-rsa");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const key = new NodeRSA({ b: 512 });

const text = "Hello RSA!";

app.post("/api/encription", (req, res) => {
  const user = req.body;
  const encrypted = key.encrypt(user, "base64");
  console.log("encrypted:", encrypted);
  res.json(encrypted);
  const decrypted = key.decrypt(encrypted, "utf8");
  console.log("decrypted: ", decrypted);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
