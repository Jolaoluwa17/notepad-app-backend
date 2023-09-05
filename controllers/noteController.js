const Note = require("../models/Notes");

// CREATE new note
const createNewNote = async (req, res) => {
  try {
    const note = await Note.create(req.body);
    return res.status(201).json(note);
  } catch (err) {
    return res.status(500).json(err, { message: "something went wrong" });
  }
};

// GET all notes
const getAllNotes = async (req, res) => {
  try {
    let note = await Note.find();

    if (note.length === 0) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res.status(200).json(note);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// GET note according to id
const getNote = async (req, res) => {
  const id = req.params._id;

  try {
    const note = await Note.findById(id); // Remove the { id } and use findById directly

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json(note);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// GET note according to user id
const getAllNotesByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const notes = await Note.find({ userId });

    if (!notes) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res.status(200).json(notes);
  } catch (err) {
    return res.status(500).json(err);
  }
};

// UPDATE note
const updateNote = async (req, res) => {
  const id = req.params._id;
  const { title, content } = req.body; // Assuming you want to update both title and content

  try {
    const note = await Note.findByIdAndUpdate(
      id,
      { title, content },
      { new: true } // This option returns the updated document
    );

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    return res
      .status(200)
      .json({
        message: "Note has been updated successfully",
        updatedNote: note,
      });
  } catch (err) {
    console.error("Error updating note:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

const deleteNote = async (req, res) => {
  const id = req.params._id;
  try {
    const note = await Note.findByIdAndDelete(id);
    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }
    return res
      .status(200)
      .json({ message: "Note has been deleted successfully" });
  } catch (err) {
    console.error("Error deleting note:", err);
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = {
  createNewNote,
  getAllNotes,
  getNote,
  getAllNotesByUser,
  updateNote,
  deleteNote,
};
