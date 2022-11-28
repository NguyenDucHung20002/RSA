const express = require("express");
const NodeRSA = require("node-rsa");
const cors = require("cors");
const crypto = require("crypto");
const app = express();
app.use(cors());
app.use(express.json());
const key = new NodeRSA({ b: 1024 });

const public_key = key.exportKey("public");
const private_key = key.exportKey("private");

const privateKey =
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDY1DzbqoavP8UVPYARHpy+zPlaFiBdf3imr5m4RdbHCwMueevk+NoWV2dqL/LBnk8oWMqWkgMDnTleXe/jvj6zQEuuCoBVDiZq4k0JXbHdTmXg0/fH7d9YD0BsSkpSJH8A9RBSnjvIzKLNHXKTUyxG1QIIKbU2lhVAB/jK2UtdwIDAQAB";
//
// const key_public = new NodeRSA(dmm);
// const key_private = new NodeRSA(private_key);

app.post("/api/encription", (req, res) => {
  const user = req.body;
  console.log("user:", user);
  const signature = crypto.sign("sha256", Buffer.from(user), {
    key: privateKey,
    padding: crypto.constants.RSA_PKCS1_PSS_PADDING,
  });

  console.log(signature.toString("base64"));
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
