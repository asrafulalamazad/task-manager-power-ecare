const express = require("express");
const UserController= require('../controller/UserController');
const TaskController= require('../controller/TaskController');
const AuthVerifyMiddleware= require('../middleware/AuthVerifyMiddleware');

const router = express.Router();
//api router end point

//User
router.post("/registration", UserController.registration);
router.post("/login", UserController.login);
router.post("/profileUpdate",AuthVerifyMiddleware , UserController.profileUpdate);



//task
//post
router.post("/createTask", AuthVerifyMiddleware,TaskController.createTask);

// get
router.get("/deleteTask/:id", AuthVerifyMiddleware,TaskController.deleteTask);
router.get("/updateTaskStatus/:id/:status", AuthVerifyMiddleware,TaskController.updateTaskStatus);
router.get("/listTaskByStatus/:status", AuthVerifyMiddleware,TaskController.listTaskByStatus);
router.get("/taskStatusCount", AuthVerifyMiddleware,TaskController.taskStatusCount);

module.exports = router;