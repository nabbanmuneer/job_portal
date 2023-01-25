const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employerSchema = new Schema(
  {
    companyName: {
      type: String,
      trim: true,
    },

    phoneNo: {
      type: Number,
      unique: true,
      trim: true,
    },

    email: {
      type: String,
      unique: true,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    position: {
      type: String,
      trim: true,
    }
  },
  { timestamps: true }
);

const employer = mongoose.model("employer", employerSchema);
module.exports = employer;