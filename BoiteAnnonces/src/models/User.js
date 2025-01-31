const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String },
  oauthProvider: { type: String, enum: ["google", "github", "twitter", "local"], default: "local" },
  oauthId: { type: String },
}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);
