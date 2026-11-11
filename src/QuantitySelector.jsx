import React from "react";
import "./QuantitySelector.css";

function QuantitySelector({ quantity, setQuantity, min = 1, max = 29 }) {

    const decrease = () => {
        if (quantity > min) {
            setQuantity(quantity - 1);
        }
    };

    const increase = () => {
        if (quantity < max) {
            setQuantity(quantity + 1);
        }
    };

    return (
        <div className="quantity-selector">
            <button onClick={decrease}>−</button>

            <span>{quantity}</span>

            <button onClick={increase}>+</button>
        </div>
    );
}

export default QuantitySelector;