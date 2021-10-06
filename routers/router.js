//Import the Router class from express.
const { Router } = require("express");

//Create a new Router instance.
const router = new Router();

//Register a GET endpoint on the / route
//that sends 'separated' as the response.
router.get("/", (request, response) => response.send("separated"));

//Export the router.
module.exports = router;
