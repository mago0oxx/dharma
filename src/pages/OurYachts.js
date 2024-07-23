import React, { useEffect, useState } from 'react';
import axios from 'axios';
import YachtCard from '../components/YachtCard';
import '../styles/OurYachts.css';

const OurYachts = () => {
  const [yachts, setYachts] = useState([]);

  useEffect(() => {
    const fetchYachts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/yachts');
        setYachts(response.data);
      } catch (error) {
        console.error('Error fetching yachts:', error);
      }
    };

    fetchYachts();
  }, []);

  return (
    <div className="yacht-list">
      {yachts.map((yacht) => (
        <YachtCard key={yacht._id} yacht={yacht} />
      ))}
    </div>
  );
};

export default OurYachts;
