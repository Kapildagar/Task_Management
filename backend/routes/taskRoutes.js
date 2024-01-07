import { Router } from "express";
import { DeleteTask, createTask, getTask, updateTask } from "../controller/taskController.js";

const taskrouter=Router();

taskrouter.route("/create").post(createTask);
taskrouter.route("/update/:id").put(updateTask)
taskrouter.route("/alltasks").get(getTask)
taskrouter.route("/delettask/:id").delete(DeleteTask)

export default taskrouter