import React from "react";
import { useTodos } from "../hooks/useTodo.js";

export default function TodoApp() {
  const {
    todos,
    apiTodos,
    text,
    setText,
    addTodo,
    toggleTodo,
    loadApiTodos,
  } = useTodos();

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-gradient-to-r from-purple-50 to-blue-50 rounded-xl shadow-xl">
      <h1 className="text-3xl font-bold text-center mb-6 text-purple-700 drop-shadow">
        🌟 Todo List
      </h1>

      {/* Input Section */}
      <div className="flex gap-3 mb-6">
        <input
          className="flex-1 border-2 border-purple-300 px-4 py-2 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 transition"
          placeholder="Add a new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTodo()}
        />
        <button
          className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded-xl shadow-md transition transform hover:scale-105"
          onClick={addTodo}
        >
          Add
        </button>
      </div>

      {/* Local Todos */}
      <h2 className="text-xl font-semibold mb-3 text-purple-600">Local Todos</h2>
      <ul className="space-y-2">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex items-center justify-between bg-white px-4 py-2 rounded-xl shadow hover:shadow-lg transition"
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                className="w-5 h-5 accent-purple-500"
              />
              <span
                className={`text-gray-800 font-medium ${
                  todo.done ? "line-through text-gray-400" : ""
                }`}
              >
                {todo.text}
              </span>
            </div>
          </li>
        ))}
      </ul>

      {/* API Todos */}
      <h2 className="text-xl font-semibold mt-8 mb-3 text-green-600">Todos from API</h2>
      <button
        className="mb-3 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-xl shadow-md transition transform hover:scale-105"
        onClick={loadApiTodos}
      >
        Show Names
      </button>
      <ul className="space-y-2">
        {apiTodos.map((todo) => (
          <li
            key={todo.id}
            className="bg-white px-4 py-2 rounded-xl shadow hover:shadow-lg transition"
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
