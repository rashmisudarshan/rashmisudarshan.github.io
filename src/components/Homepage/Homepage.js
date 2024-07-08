import React from 'react';
import reviews from '../../reviews.svg'; // Update the path as needed
import gallery from '../../gallery.svg'; // Update the path as needed
import projects from '../../projects.svg'; // Update the path as needed
import './Homepage.css'; // Import your CSS file for styling

const HomePage = () => {
  return (
    <div className="desktop">
    <div className="overlap-group">
    <div className="cards">
      <div className="element-card">
        <img className="graphic" alt="Graphic" src={reviews} />
        <div className="copy">
          <div className="text-wrapper">BOOK REVIEWS</div>
          <div className="div">ANALYSES & OPINIONS</div>
        </div>
      </div>
      <div className="element-card-2">
        <img className="graphic" alt="Graphic" src={gallery} />
        <div className="copy">
          <div className="text-wrapper">ART GALLERY</div>
          <div className="div">ORIGINAL ARTWORK</div>
        </div>
      </div>
      <div className="element-card-3">
        <img className="graphic" alt="Graphic" src={projects} />
        <div className="copy">
          <div className="text-wrapper">PROJECTS</div>
          <div className="div">CODING APPLICATIONS</div>
        </div>
      </div>
    </div>
    </div>
    </div>
    
  );
};

export default HomePage;
