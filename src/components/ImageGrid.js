import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ImageGrid = () => {
  const images = [
    "https://img.freepik.com/free-photo/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas_2829-9119.jpg",
    "https://img.freepik.com/free-photo/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas_2829-9119.jpg",
    "https://img.freepik.com/free-photo/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas_2829-9119.jpg",
    "https://img.freepik.com/free-photo/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas_2829-9119.jpg",
    "https://img.freepik.com/free-photo/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas_2829-9119.jpg",
    "https://img.freepik.com/free-photo/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas_2829-9119.jpg",
    "https://img.freepik.com/free-photo/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas_2829-9119.jpg",
    "https://img.freepik.com/free-photo/farfalle-pasta-with-seafood-cherry-tomatoes-green-peas_2829-9119.jpg",

  ];

  return (
    <div className="container mt-4">
      <h2 className="text-start mb-4">Top Categories</h2>
      <div className="row">
        {images.map((src, index) => (
          <div key={index} className="col-3 col-sm-4 col-md-4 col-lg-2 mb-3">
            <div className="p-3 text-center bg-light">
              <img src={src} alt={`Item ${index + 1}`} className="img-fluid rounded mb-2" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGrid;
