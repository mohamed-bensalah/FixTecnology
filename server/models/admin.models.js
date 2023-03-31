const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const AdminSchema = mongoose.Schema({
    email: {
      type: String,
      required: [true, 'email is required'],
      validate: {
        validator: (val) => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
        message: 'Please enter a valid email',
      },
    },
    password: {
      type: String,
      required: [true, 'Password is required'],
      minlength: [8, 'Password must be at least 8 characters or longer'],
    }},
  { timestamps: true }
);


AdminSchema.pre('save', function (next) {
  bcrypt.hash(this.password, 10).then((hash) => {

    this.password = hash;
    next();
  });
});

module.exports.Admin= mongoose.model('AdminSchema', AdminSchema);
