import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../redux/slices/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ openModal }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate('/login');
  };

  return (
    <nav className="bg-amber-300 shadow-md fixed top-0 left-0 right-0 z-50 p-4 flex justify-between items-center">
      <h1 className="text-white text-2xl font-bold">TO-DO</h1>
      <div>
        <button
          className="bg-white text-orange-600 font-medium px-4 py-2 rounded mr-4 transition duration-500 ease-in-out hover:scale-110"
          onClick={openModal}
        >
          Add Task
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded transition duration-500 ease-in-out hover:scale-110"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Navbar;