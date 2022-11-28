const express = require("express");
const NodeRSA = require("node-rsa");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const key = new NodeRSA({ b: 1024 });

const hehe = key.exportKey("public");
console.log("hehe:", hehe);

const public_key =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCmO+NrTcH4VX+w1lQW4ZV4rkEe\n" +
  "kytJvEuYMoZxhI0GEdGSzniNUbKpxXb+mQqK7oAnZUj/f52OvY1eJ/ciV5ghP/zB\n" +
  "hOkRptoVseF9d7Lk2NdxIMmwwyJAU620dMihbXh5gOpL0hFKrdbg8nLr32d/3qRU\n" +
  "ZzXsbN9iDHczcJhoxwIDAQAB\n" +
  "-----END PUBLIC KEY-----";

const key_public = new NodeRSA(public_key);

app.post("/api/encription", (req, res) => {
  const user = req.body;
  console.log("user:", user);
  const encrypted = key_public.encrypt(user, "base64");
  console.log("encrypted:", encrypted);
  res.json(encrypted);
  const decrypted = key_public.decrypt(encrypted, "utf8");
  console.log("decrypted: ", decrypted);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
