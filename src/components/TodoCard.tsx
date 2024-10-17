import React from "react";
import { Todo } from "../utils/types";
import { MdDeleteOutline } from "react-icons/md";

interface TodoCardProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoCard: React.FC<TodoCardProps> = ({
  todo,
  toggleComplete,
  deleteTodo,
}) => {
  return (
    <div
      className={`relative p-4 mb-4 rounded shadow border border-gray-300 ${
        todo.completed ? "bg-gray-100" : "bg-gray-200"
      } w-full md:max-w-md lg:max-w-lg xl:max-w-xl`}
    >
      <h3
        className={`text-xl font-semibold ${
          todo.completed ? "line-through text-gray-400" : ""
        }`}
      >
        {todo.task}
      </h3>
      <p className={`mt-2 ${todo.completed ? "text-gray-500" : ""}`}>
        {todo.completed ? "Task Completed" : "Task Incomplete"}
      </p>
      <label className="inline-flex items-center cursor-pointer mt-2">
        <input
          type="checkbox"
          checked={!todo.completed}
          onChange={() => toggleComplete(todo.id)}
          className="sr-only peer"
        />
        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-600"></div>
        <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-600">
          {todo.completed ? "Mark as Incomplete" : "Mark as Complete"}
        </span>
      </label>

      <MdDeleteOutline
        onClick={() => deleteTodo(todo.id)}
        color="red"
        size={20}
        className="absolute top-2 right-2 cursor-pointer"
      />
    </div>
  );
};

export default TodoCard;
