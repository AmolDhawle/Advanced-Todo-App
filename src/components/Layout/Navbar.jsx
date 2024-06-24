import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ openModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login')
  };

  return (
    <nav className="bg-teal-500 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl">TO-DO</h1>
      <div>
        <button
          className="bg-white text-blue-500 px-4 py-2 rounded mr-4"
          onClick={openModal}
        >
          Add Task
        </button>
        <button
          className="bg-red-700 text-white px-4 py-2 rounded"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
