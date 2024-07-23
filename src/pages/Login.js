import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/Auth.css';

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/login', formData);
            Swal.fire({
                icon: 'success',
                title: 'Inicio de sesión exitoso',
            }).then(() => {
                navigate('/dashboard'); // Ajusta la ruta según tu aplicación
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: error.response.data.error,
            });
        }
    };

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <label>Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login;
