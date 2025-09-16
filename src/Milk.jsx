import React, { useState } from 'react'
import "./Milk.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "./store";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Milk() { 
  let dispatch = useDispatch();

  let milkItems = useSelector((globalState) => globalState.products.milkItems);

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 8;

  const totalPages = Math.ceil(milkItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = milkItems.slice(indexOfFirstItem, indexOfLastItem);


  const pagenationButtons = Array.from({ length: totalPages }, (_, index) => (
    <button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      style={{
        margin: "5px",
        fontWeight: currentPage === index + 1 ? "bold" : "normal",
      }}
      className="pagenation-buttons"
    >
      {index + 1}
    </button>
  ));
  


  let milkListItems = currentItems.map(product => (
    <li key={product.id}>
      <img src={product.imgUrl} alt={product.name} />
      <h3>{product.name}</h3>

      <strong>Rs.{product.price}</strong>
      <p>{ product.description}</p>
      <button type="button" onClick={() => { dispatch(addToCart(product)); toast.success(`${product.name} added to cart successfully!`)  }}>
              Add To Cart
            </button>
    </li>
  ))
  return (
    <>
      <div className="milk-container">
        <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
        <h1 style={{ color: "blue", fontWeight: "bolder", marginTop: "5px" }}>
          Milk Items ...
        </h1>
        <ul className="item mt-5">{milkListItems}</ul>
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            disabled={currentPage === 1}
            className="previous-button"
          >
            Prev
          </button>

          <div>{pagenationButtons}</div>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="next-button"
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default Milk;