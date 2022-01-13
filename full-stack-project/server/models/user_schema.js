const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    admin: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = model("users", userSchema);
