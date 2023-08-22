const AuthRouter = require("./auth");
const UserRouter = require("./user");

const routes = ({ app }) => {
  app.use("/", AuthRouter);
  app.use("/user", UserRouter);
};

module.exports = { routes };
