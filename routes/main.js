const AuthRouter = require("./auth");
const UserRouter = require("./user");
const NoteRouter = require("./note");

const routes = ({ app }) => {
  app.use("/", AuthRouter);
  app.use("/user", UserRouter);
  app.use("/note", NoteRouter);
};

module.exports = { routes };
