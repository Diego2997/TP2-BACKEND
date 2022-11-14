const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductShema = new Schema({
  name: { type: String, lowercase: true, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
  userOwner: { type: Schema.Types.ObjectId, ref: "User" },
});

module.exports = mongoose.model("Product", ProductShema);
