import React from "react";
import "./Gallery.css";
function Gallery() {
  return (
    <div>
      <h1 className="title">Image Gallery App</h1>

      <div className="image-grid">
        <div className="image-card">
          <div className="image-details">

            <h3>Sample</h3>
            <button>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
};

export default Gallery;
