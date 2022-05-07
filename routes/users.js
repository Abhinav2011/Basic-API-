import express from "express";

import {createUser,getUser,getUserWithID,deleteUser,updateUser} from '../controllers/users.js';
const router = express.Router();


//all routes here are starting with /users

//get request
router.get("/", getUser);

//post request

router.post("/", createUser);

//get request with id
router.get("/:id", getUserWithID);

//delete request
router.delete("/:id", deleteUser);

//post request
router.patch("/:id", updateUser);

export default router;
