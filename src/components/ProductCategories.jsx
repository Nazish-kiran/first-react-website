import React from 'react'

 const ProductCategories = () => {
    const categoryCards = ()=>{
        return(
            <div className="product-category-cards">
                <div className="product-category-card">
                    <img src="https://images.unsplash.com/photo-1612833463041-1b5e6d7c3b6b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" alt="" />
                    <h5>Breakfast</h5>
                </div>
            </div>
        )
    }
  return (
    <>
<div className="product-category-section">
    <div className="product-category-top">
        <div className="product-category-subtitle">
            <h6>Customer Favorites</h6>
        </div>
        <div className="product-category-subtitle">
            <h2>Popular Catagories</h2>
        </div>
      
        <div className="product-category-cards">
        {
          categoryCards()        
        }
        </div>
    </div>
</div>
    </>
  )
}
export default ProductCategories;