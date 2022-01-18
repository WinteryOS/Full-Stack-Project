const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    hash_password: {
      type: String,
    },
    admin: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

module.exports = model("users", userSchema);
