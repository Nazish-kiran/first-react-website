import React from 'react'
import mainDish from '../assets/pngwing 4.png';
import breakfast from '../assets/pngwing 6.png';
import dessert from '../assets/pngwing 3.png';
import All from '../assets/pngwing 7.png';
const ProductCategories = () => {
    const categories = [
        { name: 'Main dish', imgSrc: mainDish, quantity: "(86 dishes)" },
        { name: 'Breakfast', imgSrc: breakfast, quantity: "(12 break fast)" },
        { name: 'Dessert', imgSrc: dessert, quantity: "(48 dessert)" },
        { name: 'Browse All', imgSrc: All, quantity: "(255 Items)" },

    ];

    const categoryCards = () => {
        return (
            <div className="product-category-cards d-flex align-items-center justify-content-center w-100 gap-4 pt-3 pt-md-5 pb-5">  
                {categories.map((category, index) => (
                    <div className="product-category-card d-flex flex-column align-items-center" key={index}>
                        <div className="product-category-figure-wrapper rounded-circle d-flex justify-content-center align-items-center">
                        <img src={category.imgSrc} alt={category.name} />
                        </div>
                        <h5>{category.name}</h5>
                        <p>{category.quantity}</p>
                    </div>
                ))}
            </div>
        );
    };

    return (
        <>
            <div className="product-category-section text-center pt-5">
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