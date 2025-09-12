import React from "react";
import { useSelector } from "react-redux";
import "./Orders.css";
import Swal from "sweetalert2";

function Orders() {
  const orders = useSelector((state) => state.orders);

  
  if (orders.length === 0) {
    return <h2 style={{ color: "red" }}>No Orders Found</h2>;
  }

  return (
    <div style={{ color: "white" }}>
      <h1 className="top">📦 Your Orders</h1>
      {orders.map((order, index) => (
        <div className="order-card">
          <div className="order-header">
          <h4 className="orderId">#ORD-{order.orderId}</h4>
            <h6 className="total-price">₹{order.netAmount}</h6>
            </div>
          <p>📅 {order.date}</p>
          <h5>📦Order Items:</h5>
          <ul className="order-items">
            {order.items.map((item, idx) => (
              <li key={idx}>
                <div className="item-details">
                  <h6>{item.name}</h6>
                  <p>Quantity: {item.quantity}</p>
                </div>
                <div className="item-price">₹{item.price}</div>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Orders;
