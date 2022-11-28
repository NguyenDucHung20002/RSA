const express = require("express");
const NodeRSA = require("node-rsa");
const cors = require("cors");
const app = express();
var keypair = require("keypair");
var forge = require("node-forge");
app.use(cors());
app.use(express.json());

// const public_key = key.exportKey("public");
// const private_key = key.exportKey("private");

const publicKey =
  "-----BEGIN PUBLIC KEY-----\nMIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDY1DzbqoavP8UVPYARHpy+zPlaFiBdf3imr5m4RdbHCwMueevk+NoWV2dqL/LBnk8oWMqWkgMDnTleXe/jvj6zQEuuCoBVDiZq4k0JXbHdTmXg0/fH7d9YD0BsSkpSJH8A9RBSnjvIzKLNHXKTUyxG1QIIKbU2lhVAB/jK2UtdwIDAQAB\n-----END PUBLIC KEY-----";
//
// const key_public = new NodeRSA(dmm);
// const key_private = new NodeRSA(private_key);

const public_key = new NodeRSA(publicKey);

var pair = keypair();
console.log(pair.public);
app.post("/api/encription", (req, res) => {
  const user = req.body;
  console.log("user:", user);
  // var publicKey = forge.pki.publicKeyFromPem(public_key);
  // console.log("publicKey:", publicKey.toString("base64"));
  // var ssh = forge.ssh.publicKeyToOpenSSH(publicKey, JSON.stringify(user));
  // console.log(ssh);
  // res.json({
  //   user: ssh,
  //   publicKey,
  // });
  // const encryptedData = crypto.publicEncrypt(
  //   {
  //     key: publicKey,
  //     padding: crypto.constants.RSA_PKCS1_OAEP_PADDING,
  //     oaepHash: "sha256",
  //   },
  //   // We convert the data string to a buffer using `Buffer.from`
  //   Buffer.from(user.body)
  // );

  // The encrypted data is in the form of bytes, so we print it in base64 format
  // so that it's displayed in a more readable form
  //console.log("encypted data: ", encryptedData.toString("base64"));

  const encrypted = public_key.encrypt(JSON.stringify(user), "base64");
  console.log("encrypted: ", encrypted);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
