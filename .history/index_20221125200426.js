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
  "-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDY1DzbqoavP8UVPYARHpy+zPlaFiBdf3imr5m4RdbHCwMueevk+NoWV2dqL/LBnk8oWMqWkgMDnTleXe/jvj6zQEuuCoBVDiZq4k0JXbHdTmXg0/fH7d9YD0BsSkpSJH8A9RBSnjvIzKLNHXKTUyxG1QIIKbU2lhVAB/jK2UtdwIDAQAB-----END PUBLIC KEY-----";

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
