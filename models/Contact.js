
const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
    title: {type: String, required: true},

  }, { timestamps: true});

  mongoose.models = {}
  export default mongoose.model("Contact", ContactSchema);