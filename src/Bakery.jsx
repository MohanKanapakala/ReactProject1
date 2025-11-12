import React, { useEffect, useState } from "react";
import "./Bakery.css";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, fetchProducts } from "./store";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Bakery() {
  const dispatch = useDispatch();
  const { bakeryItems, loading, error } = useSelector(
    (state) => state.products
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading Bakery Items...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!bakeryItems.length) return <h3>No Bakery Items Found</h3>;

  // total pages
  const totalPages = Math.ceil(bakeryItems.length / itemsPerPage);

  // Calculate items to show
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = bakeryItems.slice(indexOfFirstItem, indexOfLastItem);

  //  Prepare the list here (outside return)
  const bakeryListItems = currentItems.map((product) => (
    <li key={product.id}>
      <img src={product.imgUrl} alt="no image" />
      <h3>{product.name}</h3>
      <strong>Rs.{product.price}</strong>
      <p>{product.description}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(addToCart(product));
          toast.success(`Product ${product.name} added to cart successfully!`);
        }}
      >
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
      <div className="bakery-container">
        <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
        <h1 className="bakery-head">
          🍔<span> Bakery Items ...</span>
        </h1>
        {/* Use the prepared list */}
        <ul className="item mt-5">{bakeryListItems}</ul>
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

export default Bakery;
