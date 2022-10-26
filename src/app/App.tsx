
import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
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
    </main>
  );
}



export default App;
