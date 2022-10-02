
import React from 'react';
import { Navigate, Outlet, useNavigate } from 'react-router-dom';
import Footer from '../components/footer/footer';
import NavBar from '../components/navBar/navBar';
import './App.css';


function App() {
  const navigate = useNavigate()
  React.useEffect(() => {
    navigate("/us")
  }, [])
  return (
    <main>
      <NavBar />
      <Outlet />
      <Footer />
    </main>
  );
}



export default App;
