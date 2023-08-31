const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router
  .route("/")
  .post(noteController.createNewNote)
  .get(noteController.getAllNotes);

router.route("/:id").get(noteController.getAllNotesByUser);

module.exports = router;
