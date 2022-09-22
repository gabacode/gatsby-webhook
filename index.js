require("dotenv").config({ path: __dirname + "/.env" });
const { exec } = require("child_process");
const express = require("express");
const router = express.Router();
const app = express();
app.use("/", router);

const PORT = process.env.PORT;
const PATH = process.env.BUILD_PATH;
const CMD = "gatsby build";

router.post("/deploy", (_, res) => {
  res.send("Deploying...");
  exec(`cd ${PATH} && ${CMD}`).stdout.pipe(process.stdout);
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

