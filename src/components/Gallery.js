import React, { useEffect, useState } from "react";
import "./Gallery.css";

function Gallery() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchImages = () => {
      const data = [
        {
          id: 1,
          url: "https://picsum.photos/id/1/300/200",
          title: "Image 1",
        },
        {
          id: 2,
          url: "https://picsum.photos/id/2/300/200",
          title: "Image 2",
        },
        {
          id: 3,
          url: "https://picsum.photos/id/3/300/200",
          title: "Image 3",
        },
        {
          id: 4,
          url: "https://picsum.photos/id/4/300/200",
          title: "Image 4",
        },
        {
          id: 5,
          url: "https://picsum.photos/id/5/300/200",
          title: "Image 5",
        },
      ];

      setImages(data);
    };

    fetchImages();
  }, []);

  const handleDeleteImage = (imageDataId) => {
    setImages(images.filter((image) => image.id !== imageDataId));
  };

  return (
    <div>
      <h1 className="title">Image Gallery App</h1>

      {images.length > 0 ? (
        <div className="image-grid">
          {images.map((imagedata) => (
            <div className="image-card" key={imagedata.id}>
              <img src={imagedata.url} alt="" />

              <div className="image-details">
                <h3>{imagedata.title}</h3>
                <button onClick={() => handleDeleteImage(imagedata.id)}>
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="no-images">No Images Found</p>
      )}
    </div>
  );
}

export default Gallery;
