import express from "express";
import fs from "fs";
import path from "path";
import cors from "cors";
import process from "process";
import { log } from "console";

const app = express();
const PORT = 8090;

app.use(cors());
app.use(express.json());

const DATA_PATH = path.join(process.cwd(), "./data/todo.json");

// POST: add new task
app.post("/task/new", (req, res) => {
  const { text } = req.body;

  if (!text) {
    console.log("Text is required");
    
    return res.status(400).json({ message: "Text is required" });
  }

let data = { todos: [] };

if (fs.existsSync(DATA_PATH)) {
  const raw = fs.readFileSync(DATA_PATH, "utf-8");

  if (raw.trim()) {
    const parsed = JSON.parse(raw);
    data.todos = Array.isArray(parsed.todos) ? parsed.todos : [];
  }
}
  const newTodo = {
    id: Date.now(),
    title: text,
    completed: false
  };

  data.todos.push(newTodo);

  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2));

  res.status(201).json(newTodo);
});

// GET: view tasks
app.get("/task/view", (req, res) => {
  const data = JSON.parse(fs.readFileSync(DATA_PATH, "utf-8"));
  res.json(data);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});