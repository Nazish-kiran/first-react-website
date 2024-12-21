import React from 'react'
import mainDish from '../assets/pngwing 4.png';
import breakfast from '../assets/pngwing 6.png';
import dessert from '../assets/pngwing 3.png';
import All from '../assets/pngwing 7.png';
const ProductCategories = () => {
    const categories = [
        { name: 'Main dish', imgSrc: mainDish},
        { name: 'Breakfast', imgSrc: breakfast },
        { name: 'Dessert', imgSrc: dessert },
        { name: 'Browse All', imgSrc: All },

    ];

    const categoryCards = () => {
        return (
            <div className="product-category-cards">
                {categories.map((category, index) => (
                    <div className="product-category-card" key={index}>
                        <img src={category.imgSrc} alt={category.name} />
                        <h5>{category.name}</h5>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="product-category-section">
                <div className="product-category-top">
                    <div className="product-category-subtitle">
                        <h6>Customer Favorites</h6>
                    </div>
                    <div className="product-category-subtitle">
                        <h2>Popular Categories</h2>
                    </div>
                    <div className="product-category-cards d-flex justify-content-between">
                        {categoryCards()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductCategories;