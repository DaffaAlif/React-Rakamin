import React, { useEffect } from "react";
import { useState } from "react";
import { Plus, Trash2 } from "lucide-react";

const TaskManagerBSI = () => {

    useEffect(() => {
        console.log('useEffect Trigger')
    }, [])

  const [tasks, setTask] = useState([
    { id: 1, text: "Belajar React Component" },
    { id: 2, text: "Belajar Props" },
    { id: 3, text: "Belajar useState" },
  ]);

  const [newTaskText, setNewTaskText] = useState("");

  const handleAddTask = (e) => {
    e.preventDefault();

    if (!newTaskText.trim()) return;

    setTask((currentTasks) => [
      ...currentTasks,
      { id: Date.now(), text: newTaskText.trim() },
    ]);

    setNewTaskText("");
  };

  const handleDeleteTask = (taskId) => {
    setTask((currentTasks) =>
      currentTasks.filter((task) => task.id !== taskId)
    );
  };

  return (
    <div className="max-w-md mx-auto p-4 space-y-4">
      <h1 className="text-2xl font-bold text-center">Task Belajar React</h1>

      <form onSubmit={handleAddTask} className="flex gap-2">
        <input
          type="text"
          value={newTaskText}
          onChange={(e) => setNewTaskText(e.target.value)}
          placeholder="Enter new Task..."
          className="flex-1 p-2 border rounded"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded hover:bg-blue-400"
        >
          <Plus size={20} />
        </button>
      </form>

      <div className="space-y-2">
        {tasks.map((task) => {
          return (
            <div
              key={task.id}
              className="flex items-center justify-between p-2 border rounded hover:bg-gray-50"
            >
              <span>{task.text}</span>
              <button
                onClick={() => handleDeleteTask(task.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TaskManagerBSI;
