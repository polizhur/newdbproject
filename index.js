const express = require("express");
//Create a new express server named app.
const TodoItem = require("./models").todoitem;
const app = express();
//Import express and the router
const router = require("./routers/router");
const PORT = 4000;

//Register the router with app.use
app.use(router);

const User = require("./models").user;
const TodoList = require("./models").todolist;

//import router
const users = require("./routers/usersRouter");
const lists = require("./routers/listsRouter");

//middleware
app.use(express.json()); //parsing the body for POST and PUT requests

router.get("/", (request, response) => response.send("separated"));

app.use(users);
app.use(lists);

app.listen(PORT);
//app.listen(PORT, () => console.log(`Server started in port: ${PORT}`));
