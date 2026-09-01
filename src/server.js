import express from "express";
import { listTasks, addTask } from "./tasks.js";

const app = express();
app.use(express.json());

app.get("/tasks", (_req, res) => res.json(listTasks()));
app.post("/tasks", (req, res) => res.status(201).json(addTask(req.body.title)));

app.listen(3000, () => console.log("taskboard on :3000"));
