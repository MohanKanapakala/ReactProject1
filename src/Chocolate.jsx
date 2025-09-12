import React, { useState } from 'react'
import "./Chocolate.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from "./store";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Chocolate() {
  let dispatch = useDispatch();
  let chocolateItems = useSelector(
    (globalState) => globalState.products.chocolateItems
  );

  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 5;

  const totalPages = Math.ceil(chocolateItems.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = chocolateItems.slice(indexOfFirstItem, indexOfLastItem);



  //list items
  let chocoListItems = currentItems.map(product => (
    <li key={product.id}>
      <img src={product.imgUrl} alt="" />
      <h3>{product.name}</h3>
      <strong>Rs.{product.price}</strong>
      <p>{product.description}</p>
      <button type="button" onClick={() => { dispatch(addToCart(product)); toast.success(`${product.name} added to cart successfully!`)  }}>
              Add To Cart
            </button>
  </li>
  ))
  
  //pagenation buttons
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
  return (
    <>
      <div className="choco-container">
        <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
        <h1 style={{ color: "yellow", fontWeight: "bolder", marginTop: "5px" }}>
          Chocolate Items ...
        </h1>
        <ul className="item mt-5">{chocoListItems}</ul>
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

export default Chocolate;