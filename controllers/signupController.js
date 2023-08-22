const User = require("../models/User");
const bcrypt = require("bcryptjs");

const handleNewUser = async (req, res) => {
  const { fullname, email, password } = req.body;

  // to check if user already exists
  const existingUser = await User.findOne({
    $or: [{ email }],
  });
  if (existingUser) {
    return res.status(409).json({ message: "user already exists" });
  }

  try {
    if (!password || typeof password !== "string") {
      return res
        .status(400)
        .json({ message: "Password is required and must be of type string" });
    }

    const saltRounds = 10; // use 10 rounds of salt
    const hanshedPassword = await bcrypt.hash(password, saltRounds);

    // create a new user
    const newUser = new User({
      fullname,
      email,
      password: hanshedPassword,
    });

    // save the new user to the database
    const savedUser = await newUser.save();
    res.status(201).json({ user: savedUser });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "server error" });
  }
};

module.exports = { handleNewUser };
