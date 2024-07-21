const mongoose = require("mongoose");

const listSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  items: {
    type: Array,
    required: true,
  },
});

module.exports = mongoose.model("List", listSchema);
