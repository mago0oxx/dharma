import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import '../styles/Auth.css';

const Register = () => {
    const [formData, setFormData] = useState({
        name: '',
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
            const response = await axios.post('http://localhost:5000/api/register', formData);
            Swal.fire({
                icon: 'success',
                title: 'Registro exitoso',
                text: response.data.message,
            }).then(() => {
                navigate('/login');
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
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <label>Name:
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </label>
                <label>Email:
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
                <label>Password:
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
                <button type="submit">Register</button>
            </form>
        </div>
    );
};

export default Register;
