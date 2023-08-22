const router = require("express").Router();
const User = require("../models/User");

//GET USER
router.get("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//GET ALL USER
router.get("/", async (req, res) => {
  try {
    let users;
    users = await User.find();

    if (users.length === 0) {
      return res.status(404).json({ message: "no users found" });
    }
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//PUT USER
router.put("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

// PATCH USER
router.patch("/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json(updatedUser);
  } catch (err) {
    return res.status(500).json(err);
  }
});

//DELETE USER
router.delete("/:id", async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    await user.delete();
    if (!user) {
      return res.status(404).json({ message: "user not found" });
    }
    return res.status(200).json("user has been deleted...");
  } catch (err) {
    return res.status(500).json(err);
  }
});

module.exports = router;
