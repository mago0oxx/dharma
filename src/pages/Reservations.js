import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';
import '../styles/Reservation.css';

const Reservations = () => {
    const [yachts, setYachts] = useState([]);
    const [formData, setFormData] = useState({
        yacht: '',
        date: '',
        duration: ''
    });

    useEffect(() => {
        // Obtener la lista de yates disponibles
        const fetchYachts = async () => {
            const response = await axios.get('http://localhost:5000/api/yachts');
            setYachts(response.data);
        };
        fetchYachts();
    }, []);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/reservations', formData);
            Swal.fire({
                icon: 'success',
                title: 'Reservation Successful',
                text: 'Your reservation has been made successfully!',
            });
        } catch (error) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'There was an error making the reservation.',
            });
        }
    };

    return (
        <div className="reservation-form">
            <h2>Make a Reservation</h2>
            <form onSubmit={handleSubmit}>
                <label>Yacht:
                    <select name="yacht" value={formData.yacht} onChange={handleChange} required>
                        <option value="">Select a yacht</option>
                        {yachts.map((yacht) => (
                            <option key={yacht._id} value={yacht._id}>{yacht.name} - ${yacht.price}/hour - {yacht.status}</option>
                        ))}
                    </select>
                </label>
                <label>Date:
                    <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </label>
                <label>Duration (hours):
                    <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
                </label>
                <button type="submit">Reserve</button>
            </form>
        </div>
    );
};

export default Reservations;
