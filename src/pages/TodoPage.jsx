import React, { useState } from 'react';
import Navbar from '../components/Layout/Navbar';
import AddTaskModal from '../components/Layout/AddTaskModal';


const TodoPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState(null);

  const openModal = (task = null) => {
    setCurrentTask(task);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setCurrentTask(null);
    setIsModalOpen(false);
  };

  const handleAddTask = (task) => {
    
  };

  return (
    <div>
      <Navbar openModal={() => openModal()} />
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
