import { useState } from "react";

export const ShoppingCart = () => {
const [cartItems, setCartItems] = useState({
    reactCourse:0,
    vueCourse:0
})

 const handleAddToCart = () => {
    setCartItems({
        ...cartItems,
        reactCourse: cartItems.reactCourse + 1
    });
 }

 const handleAddVueCourse = () => {
    setCartItems({
        ...cartItems,
        vueCourse: cartItems.vueCourse + 1
    });
 };

    return (
        <div>
            <h2>Shopping Cart Component</h2>
            <ProductCard name="React Course" price={1050} quantity={cartItems.reactCourse} onAddToCart={handleAddToCart} />

                <ProductCard name="Vue Course" price={950} quantity={cartItems.vueCourse} onAddToCart={handleAddVueCourse} />
            <CartSummary cartItems={cartItems} />
        </div>
    );
};

export const ProductCard = ({name, price, quantity, onAddToCart}) => {
   
    return (
        <div>
            <h3>{name}</h3>
            <p>Rs.{price}</p>
            <p>Quantity: {quantity}</p>
            <button onClick={() => onAddToCart(name)}>Add to Cart</button>
        </div>
    );
};

export const CartSummary = ({cartItems} ) => {
    return (
        <div>
            <h3>Cart Summary</h3> 
            <p>Total Items: {cartItems.reactCourse + cartItems.vueCourse}</p>
            <p>Total Price: Rs.{cartItems.reactCourse * 1050 + cartItems.vueCourse * 950}</p>  
        </div>
    );
};