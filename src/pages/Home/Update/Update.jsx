import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const Update = () => {
    
const UpdateTask = () => {
    const { id } = useParams(); // Get task ID from URL
    const navigate = useNavigate();

    // Initialize state
    const [task, setTask] = useState({
        title: "",
        description: "",
        timestamp: "",
        category: "",
    });

    // Fetch task data on mount
    useEffect(() => {
        fetch(`http://localhost:5000/tasks/${id}`)
            .then((res) => res.json())
            .then((data) => setTask(data))
            .catch((error) => console.error("Error fetching task:", error));
    }, [id]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setTask((prevTask) => ({ ...prevTask, [name]: value }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`http://localhost:5000/tasks/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(task),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        title: "Updated!",
                        text: "Task has been successfully updated.",
                        icon: "success",
                    });
                    navigate("/dashboard"); // Redirect to dashboard
                }
            })
            .catch((error) => console.error("Error updating task:", error));
    };
}

    return (
        <div className="flex justify-center items-center min-h-screen">
            <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96"
            >
                <h2 className="text-2xl font-bold text-center mb-4">
                    Update Task
                </h2>

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Title
                </label>
                <input
                    type="text"
                    name="title"
                    value={task.title}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-4"
                    required
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Description
                </label>
                <textarea
                    name="description"
                    value={task.description}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-4"
                    required
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Timestamp
                </label>
                <input
                    type="datetime-local"
                    name="timestamp"
                    value={task.timestamp}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-4"
                    required
                />

                <label className="block text-gray-700 text-sm font-bold mb-2">
                    Category
                </label>
                <input
                    type="text"
                    name="category"
                    value={task.category}
                    onChange={handleChange}
                    className="w-full px-3 py-2 border rounded mb-4"
                    required
                />

                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
                >
                    Update Task
                </button>
            </form>
        </div>
    );
};

export default Update;