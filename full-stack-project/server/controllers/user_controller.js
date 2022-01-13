"use strict";

const User = require("../models/user_schema");

const createUser = (req, res) => {
  User.create(req.body)
    .then((data) => {
      console.log("New User Created!", data);
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        console.error("Error Validating!", err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const getUsers = (req, res) => {
  User.find()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

const getUserByID = (req, res) => {
  User.findById(req.params.id);
};

const updateUser = (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body, {
    useFindAndModify: false,
    new: true,
  })
    .then((data) => {
      console.log("User updated!");
      res.status(201).json(data);
    })
    .catch((err) => {
      if (err.name === "ValidationError") {
        console.error("Error Validating!", err);
        res.status(422).json(err);
      } else {
        console.error(err);
        res.status(500).json(err);
      }
    });
};

const deleteUser = (req, res) => {
  User.findById(req.params.id)
    .then((data) => {
      if (!data) {
        throw new Error("User not available");
      }
      return data.remove();
    })
    .then((data) => {
      console.log("User removed!");
      res.status(200).json(data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json(err);
    });
};

// const authenticate = (req, res) => {
//   User.findOne({username: req.body.username}, (err, user)=>{
//     if(err) throw err;
//   })
// }

module.exports = {
  createUser,
  getUsers,
  getUserByID,
  updateUser,
  deleteUser,
  authenticate,
};
