import express from "express";
import { createUser, getUsers, getUser, deleteUser, updateUser } from "../controllers/users.js";

const router = express.Router();

// let users = [
    // {
    //     firstName: "Ahmed",
    //     lastName: "Raza",
    //     age: 24
    // },

    // {
    //     firstName: "John",
    //     lastName: "Cena",
    //     age: 24
    // }
// ]

// all routes in here at starting with /users
// get request
router.get('/', getUsers);

// post request
router.post('/', createUser);

router.get('/:id', getUser);

router.delete('/:id', deleteUser);

router.patch('/:id', updateUser);

export default router;