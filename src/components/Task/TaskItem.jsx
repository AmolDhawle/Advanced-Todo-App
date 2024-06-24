import React from 'react';
import WeatherInfo from '../Weather/WeatherInfo';

const TaskItem = ({ task, openModal, handleDelete }) => {
  return (
    <div className="p-4 border-b border-gray-200 flex justify-between items-center">
      <div>
        <h3 className="text-lg font-bold">{task.taskName}</h3>
        <p>Priority: {task.priority}</p>
        {task.location && <p>Location: {task.location}</p>}
        {task.location && <WeatherInfo location={task.location} />}
      </div>
      <div>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded mr-2"
          onClick={() => openModal(task)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
