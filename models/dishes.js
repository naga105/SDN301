const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Currency = mongoose.Types.Currency;
const commentSchema = new Schema(
  {
    rating: { type: Number, min: 1, max: 5, required: true },
    comment: { type: String, required: true },
    author: { type: String, required: true },
  },
  { timestamps: true }
);
const dishSchema = new Schema(
  {
    name: { type: "string", required: true, unique: true },
    description: { type: "string", required: true },
    image: { type: "string", required: true },
    category: { type: "string", required: true },
    label: { type: "string", defailt: "" },
    price: { type: "number", required: true, min: 0 },
    featured: { type: "boolean", required: true, default: false },
    comments: [commentSchema],
  },
  { timestamps: true }
);

var Dishes = mongoose.model("Dish", dishSchema);
module.exports = Dishes;
