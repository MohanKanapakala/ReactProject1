import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import Swal from "sweetalert2";
import confetti from "canvas-confetti";
import {
  addOrder,
  clearCart,
  decQuantity,
  incQuantity,
  removeFromCart,
} from "./store";
import "./Cart.css";
import {
  calculateButtonDiscount,
  calculateTotal,
  getDiscountCoupon,
} from "./discountUtils";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import QRCode from "react-qr-code";

function Cart() {
  let dispatch = useDispatch();

  // SweetAlert notification
  let notification = (orderId) => {
    Swal.fire({
      icon: "success",
      title: "Order placed",
      html: `<p>Your Order <b>${orderId}</b> has been placed successfully </p>
             <p style="color:red">We'll send you a confirmation email shortly..</p>`,
      showConfirmButton: true,
      confirmButtonText: "Track Order",
      confirmButtonColor: "#2563eb",
      showCancelButton: true,
      cancelButtonText: "close",
      cancelButtonColor: "#ef4444",
      timer: 10000,
      timerProgressBar: true,
    }).then(() => {
      confetti({ particleCount: 3000, spread: 90 });
    });
  };

  let cartItems = useSelector((globalState) => globalState.cart);
  let totalAmount = Number(calculateTotal(cartItems));

  // Discount states
  let [buttonDiscount, setButtonDiscount] = useState(0);
  let [discountApply, setDiscountApply] = useState(false);
  let discountAmount = Number(
    calculateButtonDiscount(totalAmount, buttonDiscount)
  );

  // Coupon states
  const [couponcode, setCouponcode] = useState("");
  const [isApplied, setIsApplied] = useState(false);
  const [couponResult, setCouponResult] = useState({
    isValid: false,
    discountPercent: 0,
    discountAmount: 0,
  });
  const handleApplyCoupon = () => {
    let result = getDiscountCoupon(couponcode, totalAmount);
    setCouponResult(result);
    setIsApplied(true);
    if (result.isValid) {
      confetti({ particleCount: 600, spread: 120, origin: { y: 0.6 } });
    }
  };
  const couponDiscountAmount = couponResult.discountAmount;

  // Customer email
  const [customerEmail, setCustomerEmail] = useState("");

  // Final amounts
  let netAmount = Number(totalAmount - discountAmount - couponDiscountAmount);
  const taxAmount = Number(netAmount * 0.18);
  const shippingAmount = Number(netAmount * 0.1);

  // Email template params
  const templateParams = {
    order_id: new Date().getTime(),
    orders: cartItems.map((item) => ({
      name: item.name,
      price: (item.price * item.quantity).toFixed(2),
      units: item.quantity,
    })),
    cost: {
      subTotal: totalAmount,
      discount: discountAmount,
      coupon: couponDiscountAmount,
      shipping: shippingAmount.toFixed(2),
      tax: taxAmount.toFixed(2),
      total: netAmount + taxAmount + shippingAmount,
    },
    email: customerEmail,
  };

  let handleCheckOut = () => {
    emailjs
      .send(
        "service_m6st49y",
        "template_rz2kftw",
        templateParams,
        "fFuqoLHpOl8cDv_D9"
      )
      .then(() => toast.success("📧 Email sent successfully!"))
      .catch(() => toast.error("❌ Email sending failed"));
  };

  let handleCompletePurchase = () => {
    const orderId = new Date().getTime();
    let purchaseDetails = {
      orderId: orderId,
      date: new Date().toLocaleDateString(),
      items: [...cartItems],
      totalAmount: totalAmount,
      netAmount: netAmount,
    };
    dispatch(clearCart());
    dispatch(addOrder(purchaseDetails));
    notification(orderId);
  };

  const [paymentMethod, setPaymentMethod] = useState("");

  // Cart item cards
  let cartListItems = cartItems.map((item) => (
    <div key={item.id} className="cart-card">
      <img src={item.imgUrl} height={80} alt="" />
      <div className="cart-details">
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <strong>₹{item.price}</strong>
        <div className="quantity-controls">
          <button
            className="dec-btn"
            onClick={() => {
              dispatch(decQuantity(item));
              toast.warn(`${item.name} quantity decreased ➖`);
            }}
          >
            -1
          </button>
          <span className="quantity">{item.quantity}</span>
          <button
            className="inc-btn"
            onClick={() => {
              dispatch(incQuantity(item));
              toast.success(`${item.name} quantity increased ➕`);
            }}
          >
            +1
          </button>
        </div>
        <button
          className="remove-btn"
          onClick={() => {
            dispatch(removeFromCart(item));
            toast.error(`${item.name} removed from cart ❌`);
          }}
        >
          RemoveCart
        </button>
      </div>
    </div>
  ));

  return (
    <>
      <ToastContainer position="top-right" autoClose={2000} />
      <h2 className="cart-head">🛒 Your Cart</h2>
      <div className="cart-container">
        {/* Left: Cart Items */}
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <div className="empty-cart">
              <h1 className="empty-text">Your cart is empty...</h1>
              <br />
              <img
                src="images/empty-cart.jpg"
                alt="Image not found"
                height={350}
                width={450}
              />
            </div>
          ) : (
            cartListItems
          )}
        </div>

        {/* Right: Summary */}
        <div className="cart-summary">
          {/* Price Details */}
          <div className="summary-section">
            <h1>💰 Cart Summary </h1>
            <h5 style={{ margin: "20px" }}>
              Actual Amount: ₹{totalAmount.toFixed(2)}
            </h5>
            {discountApply && (
              <>
                <h5 style={{ marginBottom: "30px" }}>
                  Discount {buttonDiscount}% Applied: ₹
                  {discountAmount.toFixed(2)}
                </h5>
                <p className="success-msg" style={{ marginBottom: "30px" }}>
                  🎉 Discount Applied Successfully
                </p>
              </>
            )}
            {isApplied &&
              (couponResult.isValid ? (
                <>
                  <h5 style={{ marginBottom: "30px" }}>
                    Coupon "{couponcode}" Applied: ₹
                    {couponResult.discountAmount}
                  </h5>
                  <p className="success-msg" style={{ marginBottom: "30px" }}>
                    🎉 Coupon Applied Successfully
                  </p>
                </>
              ) : (
                <p className="error-msg" style={{ marginBottom: "30px" }}>
                  ❌ Invalid coupon code!
                </p>
              ))}
            <h3 className="final-amount" style={{ marginBottom: "30px" }}>
              Final Amount: <b> ₹{netAmount.toFixed(2)}</b>
            </h3>
          </div>

          {/* Button Discounts */}
          <div className="summary-section">
            <h2>🎯 Button Discounts</h2>
            <button
              onClick={() => {
                setButtonDiscount(5);
                setDiscountApply(true);
                confetti({
                  particleCount: 600,
                  spread: 90,
                  origin: { y: 0.6 },
                });
              }}
              className="button-disounts"
            >
              5% Discount
            </button>
            <button
              onClick={() => {
                setButtonDiscount(10);
                setDiscountApply(true);
                confetti({
                  particleCount: 600,
                  spread: 180,
                  origin: { y: 0.6 },
                });
              }}
              className="button-disounts"
            >
              10% Discount
            </button>
            <button
              onClick={() => {
                setButtonDiscount(15);
                setDiscountApply(true);
                confetti({
                  particleCount: 1000,
                  spread: 360,
                  origin: { y: 0.6 },
                });
              }}
              className="button-disounts"
            >
              15% Discount
            </button>
            <button
              onClick={() => {
                setButtonDiscount(0);
                setDiscountApply(false);
                // confetti({
                //   particleCount: 1000,
                //   spread: 90,
                //   origin: { y: 0.6 },
                // });
              }}
              className="reset-btn"
            >
              Reset
            </button>
          </div>

          {/* Coupon */}
          <div className="summary-section">
            <h2>🎟️ Apply Coupon</h2>
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponcode}
              onChange={(e) => setCouponcode(e.target.value)}
            />
            <button onClick={handleApplyCoupon} className="coupon-discount">
              Apply Coupon
            </button>
          </div>

          {/* Email */}
          <div className="summary-section">
            <h2>📧 Email</h2>
            <input
              type="email"
              value={customerEmail}
              placeholder="* enter your email"
              onChange={(e) => setCustomerEmail(e.target.value)}
            />
          </div>

          {/* Payment */}
          <div className="summary-section">
            <h2>💳 Payment</h2>
            <button onClick={() => setPaymentMethod("qr")} className="payment">
              QR Code
            </button>
            <button
              onClick={() => setPaymentMethod("card")}
              className="payment"
            >
              Card
            </button>

            {paymentMethod === "qr" && (
              <div className="qr-box">
                <h4>Scan UPI QR to pay Rs.{netAmount.toFixed(2)}</h4>
                <QRCode
                  value={`upi://pay?pa=6305927818@ybl&pn=MohanStore&am=${netAmount}&cu=INR`}
                  className="qrcode"
                />
                <p>UPI ID: 6305927818@ybl</p>
              </div>
            )}
          </div>

          {/* Final Purchase */}
          <div className="summary-section">
            <button
              onClick={() => {
                if (!customerEmail) {
                  alert("Please enter your email address");
                  return;
                }
                handleCompletePurchase();
                handleCheckOut();
              }}
              disabled={cartItems.length === 0}
              className="completepurchase-button"
            >
              ✅ Complete Purchase
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
