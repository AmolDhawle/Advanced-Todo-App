import React, { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import AddTaskModal from '../components/Layout/AddTaskModal';
import { addTask, editTask } from '../redux/slices/tasks/taskSlice';
import { useDispatch } from 'react-redux';
import TaskList from '../components/Task/TaskList';


const TodoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);
  const dispatch = useDispatch();

  const openModal = (task = null) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentTask(null);
    setIsModalOpen(false);
  };

  const handleAddTask = (task) => {
      if (currentTask) {
      dispatch(editTask({ ...task, id: currentTask.id }));
    } else {
      dispatch(addTask(task));
    }
  };


  return (
    <div>
      <Navbar openModal={() => openModal()} />
      <TaskList openModal={openModal} />
      <AddTaskModal
        isOpen={isModalOpen}
        closeModal={closeModal}
        addTask={handleAddTask}
        task={currentTask}
      />
    </div>
  );
};

export default TodoPage;
