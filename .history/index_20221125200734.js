const express = require("express");
const NodeRSA = require("node-rsa");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const key = new NodeRSA({ b: 1024 });
var public_key = key.exportKey("public");
console.log("public_key:", public_key);
public_key =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDdUWuUGt8IfoOKX1C77ebKDyhv\n" +
  "ZOu5TNbq+jhbF7Bfu9UVpafrptEwu8FP3mhOyB2P+zjxlnrwhNDMQ9NDQbyYlM04\n" +
  "JFfjI0MEjDyWba50twQbxzDia8q2RpHzMwZf+LvxyJF/QpCSDV97FITWPCaJkB/q\n" +
  "uErbZ5J1RSKG40xr3QIDAQAB\n" +
  "-----END PUBLIC KEY-----";

let key_public = new NodeRSA(public_key);

app.post("/api/encription", (req, res) => {
  const user = req.body;
  console.log("user:", user);
  const encrypted = key_public.encrypt(user, "base64");
  console.log("encrypted:", encrypted);
  res.json(encrypted);
  const decrypted = key.decrypt(encrypted, "utf8");
  console.log("decrypted: ", decrypted);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
