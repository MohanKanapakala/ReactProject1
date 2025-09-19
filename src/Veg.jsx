import React, { useState } from "react";
import "./veg.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./store";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Veg() {
  let vegItems = useSelector((globalState) => globalState.products.vegItems);
  let dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // total pages
  const totalPages = Math.ceil(vegItems.length / itemsPerPage);

  // Calculate items to show
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = vegItems.slice(indexOfFirstItem, indexOfLastItem);

  //  Prepare the list here (outside return)
  const vegListItems = currentItems.map((product) => (
    <li key={product.id}>
      <img src={product.imgUrl} alt="no image"  />
      <h3>{product.name}</h3>
      <strong>Rs.{product.price}</strong>
      <p>{product.description}</p>
      <button type="button" onClick={() => { dispatch(addToCart(product)); toast.success(`Product ${product.name} added to cart successfully!`) }}>
        Add To Cart
      </button>
    </li>
  ));

  //  Prepare pagination buttons here
  const paginationButtons = Array.from({ length: totalPages }, (_, index) => (
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
      <div className="veg-container">
        <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
        <h1 className="veg-head">
          🥗<span>Veg Items ...</span>
        </h1>
        {/* Use the prepared list */}
        <ul className="item mt-5">{vegListItems}</ul>
        {/* Use the prepared pagination */}
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
            style={{ margin: "5px" }}
            className="previous-button"
          >
            ⏪Prev
          </button>

          <div>{paginationButtons}</div>

          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="next-button"
          >
            Next⏩
          </button>
        </div>
      </div>
    </>
  );
}

export default Veg;
