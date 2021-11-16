const { User } = require("../models");

const userData = [
  {
    username: "harleycodes",
    email: "harley@gmail.com",
    password: "enhance123",
  },
  {
    username: "james",
    email: "james@gmail.com",
    password: "enhance123",
  },
  {
    username: "nomi",
    email: "nomi_js@gmail.com",
    password: "enhance123",
  },
  {
    username: "mark",
    email: "mark@gmail.com",
    password: "enhance123",
  },
  {
    username: "jinga",
    email: "jinga@gmail.com",
    password: "enhance123",
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
