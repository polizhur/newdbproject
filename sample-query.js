const User = require("./models").user;
const { Op } = require("sequelize");

async function getAllUsers() {
  try {
    // This is how we can use a query method to get all the users from the database
    // Selects all rows. Resolves with a (possibly empty) array
    const allUsers = await User.findAll();
    return allUsers.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getAllUsers().then((users) => console.log(users));

async function getspecificUsers() {
  try {
    const specificUser = await User.findOne({ where: { name: "Dave" } });
    return specificUser.toJSON();
  } catch (e) {
    console.log(e);
  }
}

//getspecificUsers().then((user) => console.log(user));

async function getKeyUser() {
  try {
    const userByPk = await User.findByPk(3);
    return userByPk.toJSON();
  } catch (e) {
    console.log(e);
  }
}

//getKeyUser().then((user) => console.log(user));

async function getTallUsers() {
  try {
    const tallUsers = await User.findAll({
      // WHERE height >= 175
      where: {
        height: {
          [Op.gte]: 175, // gte stands for 'greater than or equal'
        },
      },
    });
    return tallUsers.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

//getTallUsers().then((users) => console.log(users));
