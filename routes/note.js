const express = require("express");
const router = express.Router();
const noteController = require("../controllers/noteController");

router
  .route("/")
  .post(noteController.createNewNote)
  .get(noteController.getAllNotes);

router
  .route("/:_id")
  .get(noteController.getNote)
  .put(noteController.updateNote)
  .delete(noteController.deleteNote);

router.route("/user/:userId").get(noteController.getAllNotesByUser);

module.exports = router;
