import React, { useState } from "react";

type Task = {
    task: string;
    done: boolean;
};

const TasksToday = () => {

    const [tasks, setTasks] = useState<Task[]>([
        { task: "Feed Cows 6:00 AM", done: true },
        { task: "Water Plants", done: false },
        { task: "Vaccinate Chickens", done: false },
        { task: "Collect Eggs", done: false },
    ]);

    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (!newTask.trim()) return;

        setTasks([
            ...tasks,
            { task: newTask, done: false }
        ]);

        setNewTask("");
    };

    const toggleTask = (index: number) => {
        const updated = [...tasks];
        updated[index].done = !updated[index].done;
        setTasks(updated);
    };

    return (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-5">

            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Tasks Today
            </h2>

            {/* Add Task Form */}
            <div className="flex gap-2 mb-4">

                <input
                    type="text"
                    placeholder="Add new task..."
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    className="flex-1 border border-slate-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    onClick={addTask}
                    className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm hover:bg-blue-700 transition"
                >
                    Add
                </button>

            </div>

            {/* Task List */}
            <div className="space-y-3">

                {tasks.map((item, index) => (
                    <label
                        key={index}
                        className="flex items-center gap-3 cursor-pointer text-gray-700"
                    >
                        <input
                            type="checkbox"
                            checked={item.done}
                            onChange={() => toggleTask(index)}
                            className="w-4 h-4 accent-blue-600"
                        />

                        <span
                            className={`text-sm ${item.done
                                ? "line-through text-gray-400"
                                : ""
                                }`}
                        >
                            {item.task}
                        </span>

                    </label>
                ))}

            </div>

        </div>
    );
};

export default TasksToday;