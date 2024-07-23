import React, { useState } from 'react';
import axios from 'axios';
import '../styles/AddYacht.css';
import Swal from 'sweetalert2'; 
const AddYacht = () => {
  const [formData, setFormData] = useState({
    name: '',
    price: '',
    location: '',
    guests: '',
    image: ''
  });
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('name', formData.name);
    data.append('price', formData.price);
    data.append('location', formData.location);
    data.append('guests' , formData.guests);
    data.append('image', image);
  
    try {
      await axios.post('http://localhost:5000/api/addYacht', data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      Swal.fire({
        title: 'Éxito!',
        text: 'Yate agregado exitosamente',
        icon: 'success',
        confirmButtonText: 'OK'
      });
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Error al agregar el yate',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };
  return (
    <div className="add-yacht-form">
      <h2>Agregar Yate</h2>
      <form onSubmit={handleSubmit}>
        <label>Nombre:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>
        <label>Precio:
          <input type="number" name="price" value={formData.price} onChange={handleChange} required />
        </label>
        <label>Ubicación:
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </label>
       
        <label>Guests:
          <textarea name="guests" value={formData.guests} onChange={handleChange} required></textarea>
        </label>
        <label>Imagen:
          <input type="file" name="image" onChange={handleImageChange} required />
        </label>
        <button type="submit">Agregar Yate</button>
      </form>
    </div>
  );
};

export default AddYacht;
