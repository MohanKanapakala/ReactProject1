import React, { useEffect, useState } from 'react'
import "./Nonveg.css";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchProducts } from "./store";
import "react-toastify/dist/ReactToastify.css";
import { toast, ToastContainer } from "react-toastify";

function Nonveg() {

  const dispatch = useDispatch();
  const { nonVegItems, loading, error } = useSelector(
    (state) => state.products
  );

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <h2>Loading Non-Veg Items...</h2>;
  if (error) return <h2>Error: {error}</h2>;
  if (!nonVegItems.length) return <h3>No Non-Veg Items Found</h3>;

  const totalPages = Math.ceil(nonVegItems.length / itemsPerPage);
  
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = nonVegItems.slice(indexOfFirstItem,indexOfLastItem);

  //Preparing list of items
  let nonVegList = currentItems.map((product) => (
    <li key={product.id}>
      <img src={product.imgUrl} alt="" />
      <h3>{product.name}</h3>
      <strong>Rs.{product.price}</strong>
      <p>{product.description}</p>
      <button type="button" onClick={() => { dispatch(addToCart(product)); toast.success(`${product.name} added to cart successfully!`)  }}>
        Add To Cart
      </button>
    </li>
  ));

  //preparing pagenation buttons
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
      <div className="nonveg-container">
        <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
        <h1 className="nonveg-head">
          {" "}
          🍗<span>Non-veg Items ...</span>
        </h1>
        <ol className="item mt-5">{nonVegList}</ol>
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
            ⏪ Prev
          </button>

          <div>{pagenationButtons}</div>

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

export default Nonveg;