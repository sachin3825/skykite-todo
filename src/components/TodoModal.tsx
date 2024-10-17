import React from "react";
import { useForm } from "react-hook-form";
import { FormValues } from "../utils/types";

interface TodoModalProps {
  isOpen: boolean;
  onClose: () => void;
  onCreate: (task: string, completed: boolean) => void;
}

const TodoModal: React.FC<TodoModalProps> = ({ isOpen, onClose, onCreate }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const validateTask = (value: string) => {
    if (value.trim() === "") {
      return "Task cannot be just empty spaces.";
    }
    return true;
  };

  const onSubmit = (data: FormValues) => {
    onCreate(data.task.trim(), data.completed);
    reset();
    onClose();
  };

  return (
    <div
      id="todo-modal"
      className={`fixed inset-0 z-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="fixed inset-0 bg-black opacity-30"></div>
      <div className="relative p-4 w-full max-w-md max-h-full bg-white rounded-lg shadow">
        <div className="flex items-center justify-between p-4 border-b">
          <h3 className="text-xl font-semibold">Create Todo</h3>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600"
          >
            <svg
              className="w-4 h-4"
              aria-hidden="true"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="p-4 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Task
            </label>
            <input
              type="text"
              {...register("task", {
                required: "Task is required",
                validate: validateTask,
                maxLength: {
                  value: 100,
                  message: "Task cannot exceed 100 characters",
                },
              })}
              className={`mt-1 block w-full p-2 border border-gray-300 rounded-md ${
                errors.task ? "border-red-500" : ""
              }`}
              placeholder="Enter your task"
            />
            {errors.task && (
              <p className="text-red-500 text-sm">{errors.task.message}</p>
            )}
          </div>
          <div className="inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              {...register("completed")}
              className="sr-only peer"
            />
            <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer-checked:bg-blue-600">
              <div
                className={`absolute top-0 left-0 h-6 w-6 bg-white rounded-full transition-transform ${
                  errors.completed ? "translate-x-full" : ""
                }`}
              ></div>
            </div>
            <span className="ml-3 text-sm font-medium text-gray-900">
              Completed
            </span>
          </div>
          <div className="flex justify-end space-x-2">
            <button
              type="button"
              onClick={onClose}
              className="py-2 px-4 text-sm font-medium text-gray-700 border border-gray-300 rounded-md hover:bg-gray-100"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="py-2 px-4 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TodoModal;
