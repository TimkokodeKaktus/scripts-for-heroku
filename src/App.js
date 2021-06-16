import React, { useState, useEffect } from 'react'
import axios from 'axios';

const App = function () {
  const [products, setProducts] = useState(null);

  const [productname, setProductname] = useState("");
  const [price, setPrice] = useState("");
  useEffect(() => {
    axios
      .get("/api/users")
      .then((products) => setProducts(products))
      .catch((err) => console.log(err));
  }, []);

  function submitForm() {
    if (productname === "") {
      alert("Please fill the product name field");
      return;
    }
    if (price === "") {
      alert("Please fill the price field");
      return;
    }
    axios
      .post("/api/users", {
        productname: productname,
        price: price,
      })
      .then(function () {
        alert("Product created successfully");
        window.location.reload();
      })
      .catch(function () {
        alert("Could not creat product. Please try again");
      });
  }

  return (
    <>
      <h1>Short and Great Title</h1>
      {products === null ? (
        <p>Loading...</p>
      ) : products.length === 0 ? (
        <p>No product available</p>
      ) : (
        <>
          <h2>Available products</h2>
          <ol>
            {products.map((product, index) => (
              <li key={index}>
                Name: {product.name} - Price: {product.price}
              </li>
            ))}
          </ol>
        </>
      )}

      <form onSubmit={submitForm}>
        <input
          onChange={(e) => setProductname(e.target.value)}
          type="text"
          placeholder="Enter product name"
        />
        <input
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          placeholder="Enter procduct price"
        />
        <input type="submit" />
      </form>
    </>
  );
};
export default App