import React, { useState } from 'react';
import './LoginPage.css'; 

function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        // Logica de inicio de sesión
        console.log('Login attempt with:', email, password);
    };

    return (
        <div className="login-container">
            <div className="login-header">
                <i className="fa fa-paw"></i> {/* Ícono de una pata de mascota */}
                <h1>PetMatch</h1>
            </div>
            <form onSubmit={handleLogin}>
                <h2>Iniciar Sesión</h2>
                <div className="input-group">
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label>Contraseña:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Iniciar Sesión</button>
                <p>
                    ¿No tienes cuenta? <a href="/register">Regístrate</a>
                </p>
            </form>
        </div>
    );
}

export default LoginPage;
