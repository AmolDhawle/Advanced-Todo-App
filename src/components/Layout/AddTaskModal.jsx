import React, { useEffect, useState } from 'react';

const AddTaskModal = ({ isOpen, closeModal, addTask, task }) => {
  const [taskName, setTaskName] = useState('');
  const [priority, setPriority] = useState('low');
  const [location, setLocation] = useState('');

  // This effect runs whenever the `task` prop changes.
  useEffect(() => {
    if (task) {
      setTaskName(task.taskName || '');
      setPriority(task.priority || 'low');
      setLocation(task.location || '');
    } else {
      setTaskName('');
      setPriority('low');
      setLocation('');
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an updatedTask object based on the current state values
    const updatedTask = {
      id: task ? task.id : Date.now(), // Use the existing task id or generate a new one
      taskName: taskName,  // Use the current task name
      priority: priority,  // Use the current task priority
      location: location   // Use the current task location
    };

    addTask(updatedTask);
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white p-6 rounded shadow-md w-1/3">
        <h2 className="text-xl mb-4">{task ? 'Edit Task' : 'Add Task'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1">Task Name</label>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Priority</label>
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            >
              <option value="low">Low</option>
              <option value="medium">Medium</option>
              <option value="high">High</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-1">Location (Optional)</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded"
          >
            {task ? 'Update Task' : 'Add Task'}
          </button>
        </form>
        <button
          className="w-full bg-gray-500 text-white p-2 rounded mt-2"
          onClick={closeModal}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default AddTaskModal;
