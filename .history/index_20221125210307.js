const express = require("express");
const NodeRSA = require("node-rsa");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const key = new NodeRSA({ b: 1024 });

const hehe = key.exportKey("private");
console.log("hehe:", hehe);

const public_key =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDY1DzbqoavP8UVPYARHpy+zPlaFiBdf3imr5m4RdbHCwMueevk+NoWV2dqL/LBnk8oWMqWkgMDnTleXe/jvj6zQEuuCoBVDiZq4k0JXbHdTmXg0/fH7d9YD0BsSkpSJH8A9RBSnjvIzKLNHXKTUyxG1QIIKbU2lhVAB/jK2UtdwIDAQAB " +
  "-----END PUBLIC KEY-----";

const private_key =
  "-----BEGIN RSA PRIVATE KEY-----\n" +
  "MIIBOQIBAAJAVY6quuzCwyOWzymJ7C4zXjeV/232wt2ZgJZ1kHzjI73wnhQ3WQcL\n" +
  "DFCSoi2lPUW8/zspk0qWvPdtp6Jg5Lu7hwIDAQABAkBEws9mQahZ6r1mq2zEm3D/\n" +
  "VM9BpV//xtd6p/G+eRCYBT2qshGx42ucdgZCYJptFoW+HEx/jtzWe74yK6jGIkWJ\n" +
  "AiEAoNAMsPqwWwTyjDZCo9iKvfIQvd3MWnmtFmjiHoPtjx0CIQCIMypAEEkZuQUi\n" +
  "pMoreJrOlLJWdc0bfhzNAJjxsTv/8wIgQG0ZqI3GubBxu9rBOAM5EoA4VNjXVigJ\n" +
  "QEEk1jTkp8ECIQCHhsoq90mWM/p9L5cQzLDWkTYoPI49Ji+Iemi2T5MRqwIgQl07\n" +
  "Es+KCn25OKXR/FJ5fu6A6A+MptABL3r8SEjlpLc=\n" +
  "-----END RSA PRIVATE KEY-----";

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
