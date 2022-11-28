const express = require("express");
const NodeRSA = require("node-rsa");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

// const public_key = key.exportKey("public");
// const private_key = key.exportKey("private");

const publicKey =
  "'-----BEGIN RSA PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDY1DzbqoavP8UVPYARHpy+zPlaFiBdf3imr5m4RdbHCwMueevk+NoWV2dqL/LBnk8oWMqWkgMDnTleXe/jvj6zQEuuCoBVDiZq4k0JXbHdTmXg0/fH7d9YD0BsSkpSJH8A9RBSnjvIzKLNHXKTUyxG1QIIKbU2lhVAB/jK2UtdwIDAQAB'-----BEGIN RSA PUBLIC KEY-----\n";
//
// const key_public = new NodeRSA(dmm);
// const key_private = new NodeRSA(private_key);

const public_key = new NodeRSA(publicKey);

app.post("/api/encription", (req, res) => {
  const user = req.body;
  console.log("user:", user);

  const encrypted = public_key.encrypt(user, "base64");
  console.log("encrypted: ", encrypted);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
