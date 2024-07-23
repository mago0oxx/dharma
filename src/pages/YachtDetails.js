import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import '../styles/YachtDetails.css';

const YachtDetails = () => {
    const { id } = useParams();
    const [yacht, setYacht] = useState(null);

    useEffect(() => {
        const fetchYachtDetails = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/api/yachts/${id}`);
                setYacht(response.data);
            } catch (error) {
                console.error('Error fetching yacht details', error);
            }
        };

        fetchYachtDetails();
    }, [id]);

    if (!yacht) return <div>Loading...</div>;

    return (
        <div className="yacht-details">
            <h1>{yacht.name}</h1>
            <img src={yacht.image} alt={yacht.name} />
            <p>{yacht.description}</p>
            <p>Price: ${yacht.price}</p>
            <button>Book Now</button>
        </div>
    );
};

export default YachtDetails;
