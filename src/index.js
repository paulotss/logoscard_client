import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
// import App from './App';
import reportWebVitals from './reportWebVitals';
import HomePage from './pages/HomePage';
import ErrorPage from './pages/ErrorPage';
import ProfilePage from './pages/ProfilePage';
import CardPage from './pages/CardPage';
import LoginPage from './pages/LoginPage';
import PlanPage from './pages/PlanPage';
import RouteGuard from './components/RouteGuard';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteGuard><HomePage /></RouteGuard>,
    errorElement: <ErrorPage />
  },
  {
    path: "/profile",
    element: <RouteGuard><ProfilePage /></RouteGuard>
  },
  {
    path: "/card",
    element: <RouteGuard><CardPage /></RouteGuard>
  },
  {
    path: "/login",
    element: <LoginPage />
  },
  {
    path: "/plan/:id",
    element: <RouteGuard><PlanPage /></RouteGuard>
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
