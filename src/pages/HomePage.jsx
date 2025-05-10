import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import SearchBar from "../components/SearchBar";

const HomePage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products))
      .catch((err) => console.error("პროდუქტების ჩატვირთვის შეცდომა:", err));
  }, []);

  return (
    <main className="container">
      <h2>პროდუქტები</h2>
      <p>ნაჩვენებია {products.length} პროდუქტი 194-დან</p>
      <div className="product-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.thumbnail} alt={product.title} />
            <h3>{product.title}</h3>
            <p>{product.description.substring(0, 50)}...</p>
            <Link to={`/product/${product.id}`}>დეტალები</Link>
          </div>
        ))}
      </div>
    </main>
  );
};

export default HomePage;
