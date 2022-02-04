// create user schema using mongoose
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const actorSchema = new Schema({
  guid : {
    type : Number,
    autoIncrement : true,
  },
  id : Number,
  nom: String,
  prenom: String,
});

module.exports = mongoose.model("Actor", actorSchema);
