const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const leaderSchema = new Schema(
  {
    name: { type: "string", required: true, unique: true },
    image: { type: "string", required: true },
    designation: { type: "string", required: true },
    abbr: { type: "string", required: true },
    description: { type: "string", required: true },
    featured: { type: "boolean", required: true },
  },
  { timestamps: true }
);

var Leaders = mongoose.model("Leader", leaderSchema);
module.exports = Leaders;
