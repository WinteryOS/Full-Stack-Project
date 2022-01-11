const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    age: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = model("users", userSchema);
