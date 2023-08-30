const User = require("../models/User");
const bcrypt = require("bcryptjs");

const handleUserLogin = async (req, res) => {
  const { fullname, email, password } = req.body;

  try {
    // finding the user from the database
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    // Comparing the provided password with the stored hashed password
    const passwordMatches = await bcrypt.compare(password, user.password);

    if (!passwordMatches) {
      return res.status(401).json({ message: "Incorrect password" });
    }

    // Sign-in successful
    res.status(200).json({ message: "Sign-in successful", userDetails: user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

module.exports = { handleUserLogin };
