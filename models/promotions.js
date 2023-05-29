const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PromotionSchema = new Schema(
  {
    name: { type: "string", required: true, unique: true },
    image: { type: "string", required: true },
    label: { type: "string", required: true },
    price: { type: "string", required: true },
    description: { type: "string", required: true },
    featured: { type: "boolean", required: true },
  },
  { timestamps: true }
);

var Promotions = mongoose.model("Promotion", PromotionSchema);
module.exports = Promotions;
