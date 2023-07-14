import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, Navigate } from 'react-router-dom';
import './App.css'
import Dashboard from './components/dashboard';
import Login from './components/auth/login';
import Users from './components/users';
import Products from './components/products';
import Orders from './components/orders';
import Layout from './components/layout';
import { AuthProvider, useAuthContext } from './components/auth/authprovider';

const ProtectedPage = () => (
  <div>
    <h2>Protected Page</h2>
    <Link to="/">Go to Home</Link>
  </div>
);

const PrivateRoute = ({ path, element }) => {
  const userState = useAuthContext();
  if (userState.loggedIn) {
    return element;
  } else {
    return <Navigate to="/login" />;
  }
};

function App() {
  

  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />} >
            <Route path="/" element={<Dashboard />} />
            <Route path="/protected" element={<PrivateRoute element={<ProtectedPage />} />} />
            <Route path="/users" element={<Users />} />
            <Route path="/products" element={<Products />} />
            <Route path="/orders" element={<Orders />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>


  );
}

export default App;
