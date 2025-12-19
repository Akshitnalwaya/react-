import React, { useState } from "react";
import axios from "axios";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const [apiResponse, setApiResponse] = useState([]);

  
  const showApi = async () => {
    try {
      const response = await axios.get("http://localhost:8090/task/view");
      setApiResponse(response.data.todos || []);
    } catch (error) {
      console.error(error);
    }
  };

  const addTodo = () => {
    if (!text.trim()) return;
    setTodos([...todos, { id: Date.now(), text, done: false }]);
    setText("");
    axios.post("http://localhost:8090/task/new", {
  text: text
});
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <h1 className="text-2xl font-bold text-center mb-4">Todo List</h1>

      <div className="flex gap-2 mb-4">
        <input
          className="flex-1 border px-3 py-2 rounded-md"
          placeholder="Add new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <h2>Todos are :</h2>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center gap-2 py-1"
          >
            <input
              type="checkbox"
              checked={todo.done}
              onChange={() =>
                setTodos(
                  todos.map((t) =>
                    t.id === todo.id ? { ...t, done: !t.done } : t
                  )
                )
              }
            />
            <span className={todo.done ? "line-through text-gray-500" : ""}>
              {todo.text}
            </span>
          </li>
        ))}
      </ul>
      <h1>Calling using the API's</h1>
        <button onClick={showApi}>Show names</button>
        <ul>
          {apiResponse.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
    </div>
  );
}
