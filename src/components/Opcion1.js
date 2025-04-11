import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function MenuPage() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Estas en la opcion 1</h2>
      <h2><a href="/menu">Menu</a></h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default MenuPage;
