"use strict";

const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user_schema");

const createUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.hash_password = bcrypt.hashSync(req.body.password, 10);
  newUser.save((err, user) => {
    if (err) {
      return res.status(400).send({
        message: err,
      });
    } else {
      user.hash_password = undefined;
      return res.json(user);
    }
  });
};

const getUsers = (req, res) => {
  User.find({}, (err, user) => {
    if (err) res.send(err);
    res.json(user);
  });
};

const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    req.body,
    { new: true, useFindAndModify: false },
    (err, user) => {
      if (err) res.send(err);
      res.json(user);
    }
  );
};

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.id }, (err, user) => {
    if (err) res.send(err);
    res.json({ message: "User deleted." });
  });
};

const authenticateUser = (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.status(401).json({ message: "No user found." });
    } else if (user) {
      if (!bcrypt.compareSync(req.body.password, user.hash_password)) {
        res.status(401).json({ message: "Incorrect password." });
      } else {
        return res.json({
          user,
          token: jwt.sign(
            {
              username: user.username,
              admin: user.admin,
              _id: user.id,
            },
            "MovieReviews"
          ),
        });
      }
    }
  });
};

module.exports = {
  createUser,
  getUsers,
  updateUser,
  deleteUser,
  authenticateUser,
};
