import express from "express"
import { deletTodo, getTodos, todoHandler, updateTodo } from "../cnotrollers/todo";

const router = express.Router();

router.route("/").post(todoHandler)
router.route("/get").get(getTodos)
router.route("/:todoId").patch(updateTodo)
router.route("/delete").delete(deletTodo)


export default router