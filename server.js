const express = require("express");
const app = express();

app.use(express.json());

const UserRouter = require("./routes/user");
app.use("/api/answers/user", UserRouter);

const sortRouter = require("./routes/sort");
app.use("/sort", sortRouter);

const trolleyCalculator = require("./routes/trolleyCalculator");
app.use("/trolleyTotal", trolleyCalculator);

app.listen(5001, () => console.log("listening on http://localhost:5001"));

function server() {
  const app = express();
  app.use(express.json());

  const UserRouter = require("./routes/user");
  app.use("/api/answers/user", UserRouter);

  const sortRouter = require("./routes/sort");
  app.use("/sort", sortRouter);

  const trolleyCalculator = require("./routes/trolleyCalculator");
  app.use("/trolleyTotal", trolleyCalculator);
  return app;
}

module.exports = server