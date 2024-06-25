import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask } from '../../redux/slices/tasks/taskSlice';
import TaskItem from './TaskItem';

const TaskList = ({ openModal }) => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  // Define priority levels
  const priorityLevels = {
    high: 3,
    medium: 2,
    low: 1,
  };

  // Create a copy of tasks array before sorting
  const sortedTasks = [...tasks].sort((a, b) => priorityLevels[b.priority] - priorityLevels[a.priority]);


  return (
    <div className="mt-16 p-4">
      {sortedTasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          openModal={openModal}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
};

export default TaskList;