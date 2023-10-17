const mongoose = require("mongoose");

const registerSchema = mongoose.Schema(
  {
    password: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    email: {
      required: true,
      type: "string",
    },
    userType: {
      type: "string",
      required: true,
      default: "COMMON",
    },
    phone: {
      type: "string",
      required: false,
    },
    mobile: {
      type: "string",
      required: false,
    },
    address: {
      type: "string",
      required: false,
    },
    social_links: {
      website: String,
      facebook: String,
      twitter: String,
      instagram: String,
      gitHub: String,
    },
    image: {
      data: Buffer,
      contentType: String,
    },
  },
  { collection: "User" }
);

module.exports = mongoose.model("User", registerSchema);
