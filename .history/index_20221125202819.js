const express = require("express");
const NodeRSA = require("node-rsa");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const public_key =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDY1DzbqoavP8UVPYARHpy+zPlaFiBdf3imr5m4RdbHCwMueevk+NoWV2dqL/LBnk8oWMqWkgMDnTleXe/jvj6zQEuuCoBVDiZq4k0JXbHdTmXg0/fH7d9YD0BsSkpSJH8A9RBSnjvIzKLNHXKTUyxG1QIIKbU2lhVAB/jK2UtdwIDAQAB\n" +
  "-----END PUBLIC KEY-----";

const key_public = new NodeRSA(public_key);

app.post("/api/encription", (req, res) => {
  const user = req.body;
  console.log("user:", user);
  const encrypted = key_public.encrypt(user, "base64");
  console.log("encrypted:", encrypted);
  res.json(encrypted);
  const decrypted = key_public.decrypt(
    "cWFBk6DqTJ7dm4d47q1bkoT4eyHtQkLtzKB+r0/EJ1a5p2DTCBB3G1M5qr8yBX5HQ0gNRVjAe4ayF5SOuABTo40vBB1Q6vmzTscDlAMq8NGX5XTwkNOa3f29f57+wGKjhrxKorBBtS0mNsDg6ttkslIcN9NjnoWf32IDr2w8sEo=",
    "utf8"
  );
  console.log("decrypted: ", decrypted);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
