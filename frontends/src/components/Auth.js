// frontend/src/components/Auth.js
import React, { useState } from 'react';
import axios from 'axios';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = isLogin ? '/api/auth/login' : '/api/auth/register';
    try {
      const response = await axios.post(`http://localhost:5000${endpoint}`, { email, password });
      console.log(response.data);
      // Aquí manejarías el token (para login) o el mensaje de éxito (para registro)
    } catch (error) {
      console.error('Error:', error.response.data.message);
    }
  };

  return (
    <div>
      <h2>{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
        />
        
        <button type="submit">{isLogin ? 'Iniciar Sesión' : 'Registrarse'}</button>
      </form>
      
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? '¿Necesitas una cuenta? Regístrate' : '¿Ya tienes una cuenta? Inicia sesión'}
      </button>
      <button onClick={handleGoogleLogin}>Iniciar Sesión con Google</button>
      <button onClick={handleInstagramLogin}>Iniciar Sesión con Instagram</button>
    </div>
  );
};

export default Auth;
