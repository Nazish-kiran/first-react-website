import React from "react";
import dish1 from "../assets/Fattoush salads.png";
import dish2 from "../assets/Vegetable salad.png";
import dish3 from "../assets/Egg salad.png";

const StandoutDishes = () => {
  const dishesCards = () => {
    const dishes = [
      { name: "Fattoush salad", imgSrc: dish1, quantity: "(86 dishes)" },
      {
        name: "Vegetable salad",
        imgSrc: dish2,
        quantity: "(12 break fast)",
      },
      { name: "Egg vegi salad", imgSrc: dish3, quantity: "(48 dessert)" },
    ];
    return (
        <>
        <div className="standout-cards d-flex">
            {dishes.map((dish, index) => (
                <div className="standout-card" key={index}>
                    <div className="standout-card-img">
                        <img src={dish.imgSrc} alt={dish.name} />
                    </div>
                    <div className="standout-card-content">
                        <h5>{dish.name}</h5>
                        <p>{dish.quantity}</p>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
  };

  return (
    <>
    {dishesCards()}
    </>
  );
};

export default StandoutDishes;
