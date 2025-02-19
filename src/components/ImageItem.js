import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeart } from "react-icons/fa";

const ImageItem = () => {
  const items = Array.from({ length: 20 }).map((_, index) => ({
    img: `https://media.istockphoto.com/id/1316145932/photo/table-top-view-of-spicy-food.jpg?s=612x612&w=0&k=20&c=eaKRSIAoRGHMibSfahMyQS6iFADyVy1pnPdy1O5rZ98=`,
    title: `Item ${index + 1}`,
    description: "This is a sample description.",
    location: `Location ${index + 1}`,
    discount: `${10 + index % 5}% Off`
  }));

  return (
    <div className="container mt-4">
      <h1 className="text-start mb-3">Top Items</h1>
      <div className="row">
        {items.map((item, index) => (
          <div key={index} className="col-6 col-md-3 mb-4">
            <div className="position-relative border rounded shadow-sm p-3">
              <div className="position-absolute top-0 start-0 bg-danger text-white px-2 py-1 rounded-bottom">
                {item.discount}
              </div>
              <div className="position-absolute top-0 end-0 p-2">
                <FaHeart className="text-danger" />
              </div>
              <img src={item.img} alt={item.title} className="img-fluid rounded mb-2" />
              <h5>{item.title}</h5>
              <p>{item.description}</p>
              <p className="text-muted">📍 {item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageItem;
