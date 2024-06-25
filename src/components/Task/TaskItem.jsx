import React from 'react';
import WeatherInfo from '../Weather/WeatherInfo';
import { useDispatch } from 'react-redux';
import { toggleTaskCompletion } from '../../redux/slices/tasks/taskSlice';

const TaskItem = ({ task, openModal, handleDelete }) => {
  const dispatch = useDispatch();

  const handleToggleCompletion = () => {
    dispatch(toggleTaskCompletion(task.id));
  };

  return (
    <div className={`p-4 border-b border-gray-200 flex flex-col sm:flex-row justify-between items-start sm:items-center`}>
      <div className='flex items-start sm:items-center flex-wrap mr-8'>
        <div className="flex flex-col flex-wrap">
          <h3 className={`text-lg font-bold break-words ${task.completed ? 'bg-gray-200 line-through' : ''}`}>{task.taskName}</h3>
          <p className={`${task.completed ? 'bg-gray-200 line-through' : ''}`}>Priority: {task.priority}</p>
          {task.location && <p className={`${task.completed ? 'bg-gray-200 line-through' : ''}`}>Location: {task.location}</p>}
          {task.location && <div className={`${task.completed ? 'bg-gray-200 line-through' : ''}`}><WeatherInfo taskId={task.id} location={task.location} /> </div>}
        </div>
      </div>
      <div className="flex mt-4 sm:mt-0 flex-wrap">
        <button
          className={`bg-green-500 text-white px-4 py-2 rounded mr-2 transition duration-500 ease-in-out hover:scale-110 ${task.completed ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => openModal(task)}
          disabled={task.completed}
        >
          Edit
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded transition duration-500 ease-in-out hover:scale-110"
          onClick={() => handleDelete(task.id)}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded ml-2"
          onClick={handleToggleCompletion}
        >
          {task.completed ? 'Undone' : 'Done'}
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
