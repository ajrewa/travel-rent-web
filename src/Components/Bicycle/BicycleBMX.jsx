import React, { useState, useContext } from 'react';
import { Rating } from '@mui/material';
import { ShopContext } from '../../Context/ShopContext';
import productss from '../Assets/DataSets/MountainData';
import BMXDATA from '../Assets/DataSets/BMX_DATA';

const BicycleProductPage = () => {
  const { productss, addToCart } = useContext(ShopContext);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [mainImage, setMainImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setMainImage(product.images[0]);
  };

  const handleThumbnailClick = (image) => {
    setMainImage(image);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === selectedProduct.images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? selectedProduct.images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="product-page">
      {selectedProduct ? (
        <div className="product-detail ">
          <div className="product-images-320to480">
          <div className="carousel">
            <img className="main-image" src={selectedProduct.images[currentIndex]} alt={selectedProduct.name}/>
            <button className="prev-button" onClick={handlePrevious}>&lt;</button>
            <button className="next-button" onClick={handleNext}>&gt;</button>
          </div>
          </div>

          <div className="product-images-allscreen">
            <img className="main-image" src={mainImage} alt={selectedProduct.name} />
            <div className="thumbnail-list">
              {selectedProduct.images.map((image, index) => (
                <img
                  key={index}
                  className="thumbnail"
                  src={image}
                  alt={selectedProduct.name}
                  onClick={() => handleThumbnailClick(image)}
                />
              ))}
            </div>
          </div>

          <div className="product-info">
            <h2>{selectedProduct.name}</h2>
            <div className="prices">
              <p className="old-price">{selectedProduct.oldPrice}</p>
              <p className="new-price">{selectedProduct.price}</p>
            </div>
            <p style={{ margin: "5px 0 20px 0" }}>Inclusive of all taxes</p>
            <Rating className="rating" name="read-only" value={3} readOnly />
            <button className="add-cart-button" onClick={() => addToCart(selectedProduct)}>
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="product-list">
          {BMXDATA.map((product) => (
            <div key={product.id} className="product-item" onClick={() => handleProductClick(product)}>
              <img src={product.images[0]} alt={product.name} />
              <h3>{product.name}</h3>
              <p style={{ color: "green", fontSize: "12px" }}>Tap For More</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BicycleProductPage;
