import { useEffect, useState } from "react";
import type { Todo } from "../utils/types";
import axios from "axios";
import TodoCard from "./TodoCard";
import TodoModal from "./TodoModal";
import { IoMdAddCircleOutline } from "react-icons/io";

const Todo = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [filter, setFilter] = useState<"all" | "completed" | "pending">("all");
  const [search, setSearch] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    async function fetchTodo() {
      const response = await axios.get(
        "https://run.mocky.io/v3/cb74646f-0bf9-4ba8-a167-d652a413c74b"
      );
      setTodos(response.data);
    }
    fetchTodo();
  }, []);

  const toggleComplete = (id: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const createTodo = (task: string) => {
    const newTodo: Todo = {
      id: todos.length + 1,
      task,
      completed: false,
    };
    setTodos((prevTodos) => [...prevTodos, newTodo]);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const totalTasks = todos.length;
  const completedTasks = todos.filter((todo) => todo.completed).length;

  const filteredTodos = todos
    .filter((todo) => {
      if (filter === "completed") return todo.completed;
      if (filter === "pending") return !todo.completed;
      return true;
    })
    .filter((todo) => todo.task.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className="w-11/12 flex-grow mx-auto p-4">
      <div className=" p-2 mx-auto">
        <div className="flex gap-2 md:w-1/2 w-full mx-auto">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search tasks"
            className="mb-4 p-2 border rounded w-full"
          />

          <select
            value={filter}
            onChange={(e) =>
              setFilter(e.target.value as "all" | "completed" | "pending")
            }
            className="mb-4 p-2 border rounded"
          >
            <option value="all">All</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="flex justify-between">
          <button
            onClick={openModal}
            className="flex items-center gap-2 justify-center mb-4 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg px-2 py-2.5 text-center"
          >
            <p>Create Todo</p>
            <IoMdAddCircleOutline size={30} />
          </button>
          <div className="mb-4 text-white font-semibold text-sm">
            <p>Total tasks: {totalTasks}</p>
            <p>Completed tasks: {completedTasks}</p>
          </div>
        </div>

        {filteredTodos.length === 0 ? (
          <p className="text-white text-center">No tasks available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {filteredTodos.map((todo) => (
              <TodoCard
                key={todo.id}
                todo={todo}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
              />
            ))}
          </div>
        )}

        <TodoModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onCreate={createTodo}
        />
      </div>
    </main>
  );
};

export default Todo;
