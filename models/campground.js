var mongoose = require("mongoose");

var campgroundSchema = new mongoose.Schema({
   name: String,
   image1: String,
    image2: String,
   description: String,
   location: String,
   room: Number,
   area: Number,
   price: Number,
   date: { type: Date },
   bedroom: Number,
   bedroomFurnished: String,
   kitchen: String,
   water: String,
   electricity: String,
   internet: String,
   bathroom: String,
   toilet: String,
   desk: String,
   wifi: String,
   heating: String,
   washing: String,
   bed: String,

   author: {
      id: {
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment"
      }
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);