const { Admin } = require("../models/admin.models")

const bcrypt = require('bcryptjs');

const jwt = require('jsonwebtoken');
module.exports.Login = async (req, res) => {
    try {
      const Admin = await Admin.findOne({ email: req.body.email });
      if (!Admin) {
        return res.status(400).json({ msg: 'Email not found' });
      }
      const isMatch = await bcrypt.compare(req.body.password, Admin.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Wrong password' });
      }
      // TOKEN
      const payload = {
        id: Admin._id,
      };
  
      const token = jwt.sign(payload, 'supersecret', {
        expiresIn: '10d',
      });
  
      return res.json({ Admin, token });
    } catch (error) {
      console.log(error);
    }
  };