const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const employeeSchema = new Schema(
  {
    userName: {
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

const empoyee = mongoose.model("employee", employeeSchema);
module.exports = empoyee;