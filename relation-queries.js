const { user, todoItem, todoList } = require("./models");

// Get TodoLists with information about the user who owns them
// async function listsWithUsers() {
//     const lists = await todoList.findAll({
//       include: [user],
//     });

//     return lists.map((list) => list.toJSON());
//   }

// Get the name of our Users with the lists
async function listsWithUsers() {
  const lists = await todoList.findAll({
    include: [{ model: user, attributes: ["name"] }],
  });
  return lists.map((list) => list.toJSON());
}

//listsWithUsers().then((lists) => console.log(lists));

//Get users with their lists
async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers.map((user) => user.toJSON());
}

// getUsers().then((users) => console.log(users));

//Get one user by id with his lists.
async function getUserWithList(id) {
  const result = await user.findByPk(id, { include: [todoList] });
  return result.get({ plain: true });
}

//getUserWithList(1).then((user) => console.log("user by id with lists", user));

//Get important TodoItems with the name of the list they belong to.
async function getImportantItem() {
  const todos = await todoItem.findAll({
    where: { important: true },
    include: { model: todoList, attributes: ["name"] },
  });
  return todos.map((toDoItem) => toDoItem.toJSON());
}

// getImportantItem().then((todoItems) =>
//   console.log("important todoItems", todoItems)
// );

//Get one user by id with his lists,
//which also contain their belonging TodoItem's task attribute
async function getUserById(id) {
  const result = await user.findByPk(id, {
    include: [
      {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] },
      },
    ],
  });
  return result.get({ plain: true });
}

getUserById(3).then((user) => console.log("user with tasks", user));
