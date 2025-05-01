import React, { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-10">
      {products.map((product) => (
        <div key={product.id} className="border p-4">
          <img
            src={product.image}
            alt={product.title}
            className="h-40 mx-auto"
          />
          <h2 className="text-lg font-semibold">{product.title}</h2>
          <p className="text-gray-600">${product.price}</p>
          <button className="bg-green-500 text-white px-4 py-2 mt-2">
            Add to Cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Products;
