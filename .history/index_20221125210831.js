const express = require("express");
const NodeRSA = require("node-rsa");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());
const key = new NodeRSA({ b: 1024 });

const hehe = key.exportKey("private");

const public_key =
  "-----BEGIN PUBLIC KEY-----\n" +
  "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCDY1DzbqoavP8UVPYARHpy+zPlaFiBdf3imr5m4RdbHCwMueevk+NoWV2dqL/LBnk8oWMqWkgMDnTleXe/jvj6zQEuuCoBVDiZq4k0JXbHdTmXg0/fH7d9YD0BsSkpSJH8A9RBSnjvIzKLNHXKTUyxG1QIIKbU2lhVAB/jK2UtdwIDAQAB " +
  "-----END PUBLIC KEY-----";

const private_key =
  "-----BEGIN RSA PRIVATE KEY-----\n" +
  "MIICXAIBAAKBgQCX9BhXTYblq0ij28heySy22De4EiP26yz9N3ecAjxwa49boTP1\n" +
  "ZCqGDahYfMDdqON3DqXgEsAZ2142AdLOrlDNlUfE7sak8WGQXfzIBABElWRE8tUT\n" +
  "xmpFwvnYG6GNuGCOewZdbz8Q0D3Hp8qxXhXtXmt8nVBonVsq38qtWie6wQIDAQAB\n" +
  "AoGAZV05l5Np929pR5VndoNwxpA5qxq+zwpWupvzuChttPiraw6AIKQvEbmuoUin\n" +
  "R7ZP9q3YzT700srZb+GLhMAXud7V8qPTll+Oh42uTMa7IIFL1/rGdPgfbEU+1rYS\n" +
  "dqgCMUooLSNJwwA1KNA8cv+rMPv5dKH0JhhaT+ofRcwU0CECQQD18YTHVaA1C9Vi\n" +
  "AYQaTmVYRNODT9TZ2hW9kFwni8iOx/lY4AX+baBWY+L2g0kcVlbOVi/fbcjXt3Sb\n" +
  "xRjHQje1AkEAniq16euH0KAgZ2xHIKI35Eolrrl38Y/Mfllzlg8RJLgXI83gqqTU\n" +
  "L+1+BaEBDhmTK+CwQdVR1F696SVamyZGXQJAJuS21r8XwsvIRuNufKqBJGBeApoR\n" +
  "UxJF9eBqcmaMpOfC6ucii4XSoVbSgaFpYm3U9HR0xaSa6mI8spWMwZYbMQJALc3K\n" +
  "nrJxw24L1EecFYxEyVzbqszVOmRdYR3Ahm1YlpylPt4pOOHA/Rw2yaSFrLKlVyib\n" +
  "goUnTGwfbTw/D/02lQJBAMNf4Tq3FvFeP6D/YfvAdqGYeflSF17MipFdEzBN5RDW\n" +
  "iHRbmmJtgvJQx0cdkZLzc9zioS8F6S8Fhy6E1t6Ai2I=\n" +
  "-----END RSA PRIVATE KEY-----";

const key_public = new NodeRSA(public_key);
const key_private = new NodeRSA(private_key);

app.post("/api/encription", (req, res) => {
  const user = req.body;
  console.log("user:", user);
  const encrypted = key_public.encrypt(user, "base64");
  console.log("encrypted:", encrypted);
  res.json(encrypted);
  const decrypted = key_private.decrypt(encrypted, "utf8");
  console.log("decrypted: ", decrypted);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
