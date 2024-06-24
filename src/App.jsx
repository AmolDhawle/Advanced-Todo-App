// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { Provider, useSelector } from 'react-redux';
// import store from './redux/store';
// import LoginPage from './pages/LoginPage';
// import TodoPage from './pages/TodoPage';


// function App() {
  
//   return (
//     <Provider store={store}>
//       <Router>
//         <Routes>
//           <Route path="/" element={<TodoPage />} /> 
//             <Route path="/login" element={<LoginPage/>} />
          
//         </Routes>
//       </Router>
//     </Provider>
//   );
// }

// export default App;



// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { Provider, useSelector } from 'react-redux';
import store from './redux/store';
import LoginPage from './pages/LoginPage';
import TodoPage from './pages/TodoPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<ProtectedRoute />} />
          <Route path="/login" element={<ProtectedLoginPage />} />
        </Routes>
      </Router>
    </Provider>
  );
};

const ProtectedRoute = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <TodoPage /> : <Navigate to="/login" replace />;
};

const ProtectedLoginPage = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  return isAuthenticated ? <Navigate to="/" replace /> : <LoginPage />;
};

export default App;
