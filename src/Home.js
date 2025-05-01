import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-center p-10">
      <h1 className="text-3xl font-bold">Welcome to Our Store</h1>
      <Link
        to="/products"
        className="mt-4 inline-block bg-blue-500 text-white px-6 py-2 rounded"
      >
        View Products
      </Link>
    </div>
  );
};

export default Home;
