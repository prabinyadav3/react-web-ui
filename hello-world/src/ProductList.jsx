import React from "react";
export const ProductList = () => {
    const names = ["Alice", "Bob", "Charlie", "Diana"];
  const products = [
    {
        id: 1,
        name: "Laptop",
        price: 999.99,
    }, 
    {
        id: 2,
        name: "Phone",
        price: 599.99,
    }, 
    {
        id: 3,
        name: "Tablet",
        price: 299.99,
    },
    {
        id: 4,
        name: "Headphones",
        price: 199.99,
    },
    {
        id: 5,
        name: "Smartwatch",
        price: 149.99,
    }
];

const productElements = products.filter((product) =>{ return product.price > 500;})
.map((product) => {
        return (
            <React.Fragment key={product.id}>
        <div>
            <h3>{product.name}</h3>
            <p>Price: ${product.price}</p>
        </div>
            </React.Fragment>
        );
    })

    return (
    <div>
        <h2>Our Products</h2>
    {
      productElements
    }   
    </div>
    );
};
