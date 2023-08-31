import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faPlus, faCheck } from '@fortawesome/free-solid-svg-icons';
import img1 from '../img1.jpg';
import img2 from '../img-2.jpg';
import img3 from '../img-3.jpg';
import "../App.css"


function ProductPage() {
  const products = [
    {
      id: 1,
      imageSrc: img1,
      price: '$4.98',
      reviewIcons: [img2,img3],
      plusCount: 3,
    },
    {
        id: 2,
        imageSrc: img1,
        price: '$1.99',
        reviewIcons: [img2,img3],
        plusCount: 4,
      },
      {
        id: 3,
        imageSrc: img1,
        price: '$12.99',
        reviewIcons: [img2,img3],
        plusCount: 1,
      },  {
        id: 4,
        imageSrc: img1,
        price: '$2.87',
        reviewIcons: [img2,img3],
        plusCount: 5,
      },  {
        id: 5,
        imageSrc: img1,
        price: '$12.99',
        reviewIcons: [img2,img3],
        plusCount: 4,
      },  {
        id: 6,
        imageSrc: img1,
        price: '$11.99',
        reviewIcons: [img2,img3],
        plusCount: 4,
      },  {
        id: 7,
        imageSrc: img1,
        price: '$12.99',
        reviewIcons: [img2,img3],
        plusCount: 4,
      },  {
        id: 8,
        imageSrc: img1,
        price: '$3.9',
        reviewIcons: [img2,img3],
        plusCount: 5,
      },  {
        id: 9,
        imageSrc: img1,
        price: '$8',
        reviewIcons: [img2,img3],
        plusCount: 1,
      },  
  ];

  return (
    <div className="product-page">
      <header className="top-header">
        <div className="filter-options">
          <button className="filter-button">Trending</button>
          <button className="filter-button">New</button>
          <button className="filter-button">Most Popular</button>
        </div>
      </header>
      <div className="product-cards">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <div className="icons">
              <span className="heart-icon">
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span className="plus-icon">
                <FontAwesomeIcon icon={faPlus} />
              </span>
            </div>
            <div className="product-details">
              <span className="price">
                <FontAwesomeIcon className='check-icon' icon={faCheck} />
                {product.price}
              </span>
            </div>
            <img className="product-image" src={product.imageSrc} alt="" />
            <div className="product-bottom">
              <div className="reviews">
                {product.reviewIcons.map((reviewIcon, index) => (
                  <div key={index}>
                    <img className="circle-icon" src={reviewIcon} alt="" />
                  </div>
                ))}
                <div className="plus-count">+{product.plusCount}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
