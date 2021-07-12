const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

//Define our model
const adminSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  admin: { type: Boolean },
  date: { type: Date, default: Date.now }
});

adminSchema.pre("save", function (next) {
  const user = this;
  //  if(!user.isDirectModified('password')){
  //      return next()
  //  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) next(err);
      user.password = hash;
      next();
    });
  });
});
module.exports = CulinaAdmin = mongoose.model("adminCulina", adminSchema);
