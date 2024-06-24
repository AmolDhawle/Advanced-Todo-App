import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';


function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/" element={<TodoPage />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
