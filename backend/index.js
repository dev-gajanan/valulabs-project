const express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes/routes");

const PORT = 5010;

const app = express();

app.use(bodyParser.json());

app.use("/api", router);

app.listen(PORT, () =>
  console.log("Server started on http://localhost:" + PORT)
);
