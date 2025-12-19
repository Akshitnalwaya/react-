import { useState } from "react";
import { fetchTodos, createTodo } from "../services/todoService";

export const useTodos = () => {
  const [todos, setTodos] = useState([]);
  const [apiTodos, setApiTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = async () => {
    if (!text.trim()) return;

    const newTodo = { id: Date.now(), text, done: false };
    setTodos((prev) => [...prev, newTodo]);
    setText("");

    try {
      await createTodo(text);
    } catch (error) {
      console.error("Failed to create todo", error);
    }
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, done: !t.done } : t
      )
    );
  };

  const loadApiTodos = async () => {
    try {
      const data = await fetchTodos();
      setApiTodos(data);
    } catch (error) {
      console.error("Failed to fetch todos", error);
    }
  };

  return {
    todos,
    apiTodos,
    text,
    setText,
    addTodo,
    toggleTodo,
    loadApiTodos,
  };
};
