import { useState } from "react";

export default function Tasks({ tasks, onAddTask, onClearTask }) {
  const [taskInput, setTaskInput] = useState("");

  function handleAddTask() {
    if (taskInput.trim()) {
      const newTask = {
        id: Date.now(), // Generate a unique id for the task
        title: taskInput,
      };
      onAddTask(newTask);
      setTaskInput(""); // Clear the input field after adding the task
    }
  }

  return (
    <section>
      <h2 className="text-2xl font-bold text-stone-700 mb-4">Tasks</h2>
      <div className="flex items-center gap-4">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)} 
          className="w-64 px-2 py-1 rounded-sm bg-stone-200"
        />
        <button
          className="text-stone-700 hover:text-stone-950"
          onClick={handleAddTask}
        >
          Add task
        </button>
      </div>
      <div>
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              <li key={task.id} className="flex justify-between my-4">
                <span>{task.title}</span>
                <button
                  onClick={() => onClearTask(task.id)} 
                  className="text-stone-700 hover:text-red-500"
                >
                  Clear
                </button>
              </li>
            ))
          ) : (
            <p className="text-stone-800 my-4">
              This project does not have any tasks yet.
            </p>
          )}
        </ul>
      </div>
    </section>
  );
}
