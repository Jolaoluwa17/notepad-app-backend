const express = require("express");
const app = express();
const connectDB = require("./migrations/index.js");
const cors = require("cors"); // Import cors middleware\
// const session = require("express-session");
// const flash = require("express-flash");
// const bodyParser = require("body-parser");

app.use(cors()); // Use cors middleware

const { routes } = require("./routes/main.js");

routes({ app });

app.get("/", (req, res) => {
  res.send("Server Running");
});

connectDB();

const port = process.env.ACCESS_PORT || 5500;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
