import React, { useEffect, useState } from "react";
import "./Milk.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "./store";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Milk() {
  const dispatch = useDispatch();
  const { milkItems, loading, error } = useSelector((state) => state.products);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading Milk Items...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!milkItems.length) return <h3>No Milk Items Found</h3>;

  const totalPages = Math.ceil(milkItems.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = milkItems.slice(indexOfFirstItem, indexOfLastItem);

  const milkListItems = currentItems.map((product) => (
    <li key={product.id}>
      <img src={product.imgUrl} alt={product.name} />
      <h3>{product.name}</h3>
      <strong>Rs.{product.price}</strong>
      <p>{product.description}</p>
      <button
        onClick={() => {
          dispatch(addToCart(product));
          toast.success(`${product.name} added to cart successfully!`);
        }}
      >
        Add To Cart
      </button>
    </li>
  ));

  const paginationButtons = Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      style={{
        margin: "5px",
        fontWeight: currentPage === index + 1 ? "bold" : "normal",
      }}
    >
      {index + 1}
    </button>
  ));

  return (
    <div className="milk-container">
      <ToastContainer position="top-right" autoClose={2000} />
      <h1 className="milk-head">
        🍹<span> Milk Items ...</span>
      </h1>
      <ul className="item mt-5">{milkListItems}</ul>
      <div
        style={{ marginTop: "20px", display: "flex", justifyContent: "center" }}
      >
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          ⏪Prev
        </button>
        {paginationButtons}
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next⏩
        </button>
      </div>
    </div>
  );
}

export default Milk;
