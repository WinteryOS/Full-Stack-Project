const { Schema, model } = require("mongoose");
// const bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    hash_password: {
      type: String,
    },
    admin: {
      type: String,
    },
  },
  { timestamps: true }
);

// userSchema.methods.comparePassword = (password, hash_password) => {
//   return bcrypt.compareSync(password, hash_password);
// };

module.exports = model("users", userSchema);
