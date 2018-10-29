var mongoose = require("mongoose");

var contactSchema = new mongoose.Schema({
   name: String,
   phone: Number,
   email: String,
   homeName: String,
});

module.exports = mongoose.model("Contact", contactSchema);