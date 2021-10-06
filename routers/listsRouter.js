const { Router } = require("express");
const router = new Router();

//model imports
const TodoList = require("../models").todoList;
const TodoItem = require("../models").todoItem;

//Implement a GET endpoint for all todoLists.
router.get("/todoLists", async (req, res, next) => {
  const todoLists = await TodoList.findAll();
  res.json(todoLists);
});

//Implement the POST and PUT handlers for the todoLists,
//use the ones we defined for user as a starting point.
//The endpoints could be /todoLists and todoLists/:listId for example
router.post("/todoLists", async (req, res, next) => {
  try {
    const newList = await TodoList.create(req.body);
    res.json(newList);
  } catch (e) {
    next(e);
  }
});

router.put("/todoLists/:listId", async (req, res, next) => {
  try {
    const listId = parseInt(req.params.listId);
    const listToUpdate = await TodoList.findByPk(listId);
    if (!listToUpdate) {
      res.status(404).send("List not found");
    } else {
      const updatedList = await listToUpdate.update(req.body);
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});

module.exports = router;
