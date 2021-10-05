const User = require("./models").user;
const TodoItem = require("./models").todoItem;
const { Op } = require("sequelize");

//Searches for all users and logs them.
async function listOfUsers() {
  try {
    const allUsers = await User.findAll();
    return allUsers.map((user) => user.toJSON());
  } catch (e) {
    console.log(e);
  }
}

// async function getUsers() {
//     const allUsers = await User.findAll();
//     return allUsers.map(user => user.get({ plain: true }));
//   }

//listOfUsers().then((users) => console.log(users));

//Searches for all TodoItems and logs them (use .toJSON()).
async function getAllItems() {
  try {
    const allTodoItems = await TodoItem.findAll();
    return allTodoItems.map((item) => item.toJSON());
  } catch (e) {
    console.log(e);
  }
}

//getAllItems().then((result) => console.log(result));

// async function getTodoItems() {
//     const allTodoItems = await TodoItem.findAll();
//     return allTodoItems.map(item => item.get({ plain: true }));
//   }

// getTodoItems().then(result => console.log(result));

//Searches for a user by primary key.
async function getKeyUser() {
  try {
    const userByPk = await User.findByPk(1);
    return userByPk.toJSON();
  } catch (e) {
    console.log(e);
  }
}

//getKeyUser().then((user) => console.log(user));

// async function getUserByPk(key) {
//     const user = await User.findByPk(key);
//     return user ? user.get({ plain: true }) : "Not found!";
//   }

//   getUserByPk(2).then(result => console.log(result));

// Creates a new user.
// (Once you manage to create this user,
// delete or comment out the function call as to not run it again,
// otherwise we'll get an error).
async function newUser({ name, email, phone }) {
  const newUser = await User.create({ name, email, phone });
  return newUser.get({ plain: true });
}

newUser({ name: "rein", email: "rein@codaisseur.com", phone: 4232 }).then(
  (result) => console.log(result)
);

//Searches only for important TodoItems
async function getImportantItems() {
  try {
    const importantItems = await TodoItem.findAll({
      where: {
        important: {
          [Op.gte]: true, // gte stands for 'greater than or equal'
        },
      },
    });
    return importantItems.map((TodoItem) => TodoItem.toJSON());
  } catch (e) {
    console.log(e);
  }
}

getImportantItems().then((TodoItems) => console.log(TodoItems));

// async function importantTodos() {
//     const todos = await TodoItem.findAll({ where: { important: true } });
//     return todos.map(todo => todo.get({ plain: true }));
//   }

//   importantTodos().then(result => console.log(result));
