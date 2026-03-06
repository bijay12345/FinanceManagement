import React from "react";

const tasks = [
    { task: "Feed Cows 6:00 AM", done: true },
    { task: "Water Plants", done: false },
    { task: "Vaccinate Chickens", done: false },
    { task: "Collect Eggs", done: false },
];

const TasksToday = () => {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 w-full">
            <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Tasks Today
            </h2>

            <div className="space-y-3">
                {tasks.map((item, index) => (
                    <label
                        key={index}
                        className="flex items-center gap-3 cursor-pointer text-gray-700"
                    >
                        <input
                            type="checkbox"
                            defaultChecked={item.done}
                            className="w-4 h-4 accent-blue-600"
                        />
                        <span
                            className={`text-sm ${item.done ? "line-through text-gray-400" : ""
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