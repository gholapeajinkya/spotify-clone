import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, Route, RouterProvider, Routes } from "react-router-dom";
import App from './app/App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Dashboard from './screens/dashboard/dashboard';
import LandingPage from './screens/landingPage/landingPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <div >Error</div>,
    children: [
      {
        path: '/us',
        element: <Dashboard />,
      }
    ]
  },
]);

ReactDOM.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
