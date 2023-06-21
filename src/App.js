import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import './App.css';
import Signin from './components/Signin/Signin';
import Forgot from './components/ForgotPassword/Forgot';

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <Signin /> },
    { path: '/forgot', element: <Forgot /> }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
