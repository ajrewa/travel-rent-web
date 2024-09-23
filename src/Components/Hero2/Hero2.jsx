import React from 'react';
import { Rating } from '@mui/material';
import './Hero2.css';
import Costumer from '../Assets/DataSets/ReviewDataset';

const Hero2 = () => {
  return (
    <div className="hero2">
      <div className="hero2-item">
        {Costumer.map((profile) => (
          <div className="profile" key={profile.id}>
            <div className="profile-image">
              <img src={profile.image} style={{ width: '100px', height: '100px' }} alt={`Profile of ${profile.name}`} />
            </div>
            <div className="profile-content">
              <p>{profile.name}</p>
              <p className="review">"{profile.review}"</p>
              <Rating className="rating" name="read-only" value={profile.rating} readOnly />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero2;