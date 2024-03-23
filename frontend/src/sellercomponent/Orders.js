// Order.js
import React, { useState, useEffect } from "react";
import "./Orders.css";
import Header from "./Header"; // Import the OrderDetailsModal component
import axios from "axios";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const sellerId = JSON.parse(localStorage.getItem("data"))._id;

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = () => {
    // Fetch orders from the API when the component mounts
    fetch(`${process.env.REACT_APP_API_URL}/order/get-order`)
      .then((response) => response.json())
      .then((data) => {
        const filteredOrders = data.filter(
          (element) => element.sellerData._id === sellerId
        );

        const finalOrders  = filteredOrders.reverse();
        // Set the filtered orders
        setOrders(finalOrders);
        //  }
      })
      .catch((error) => console.error("Error fetching orders:", error));
  };

  const completeOrder = async (orderId) => {
    await axios
      .patch(
        `${process.env.REACT_APP_API_URL}/order/complete-order/${orderId}`,
        {}
      )
      .then((response) => {
        alert(response.data.message);
        fetchOrders();
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <>
      <Header />
      <div>
        <h2>Orders</h2>
        <div className="orders-container">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <p>
                <span className="fw-bold">Customer:</span>
                {order.customerData.name}
              </p>
              <p>
                <span className="fw-bold">Address:</span>
                {order.customerData.address}
              </p>
              <p>
                <span className="fw-bold">deliveryTime:</span>
                {order.deliveryTime}
              </p>
              <p>
                <span className="fw-bold">mealPlan:</span>
                {order.mealPlan}
              </p>
              <p>
                <span className="fw-bold">quantity:</span>
                {order.quantity}
              </p>
              <p>
                <span className="fw-bold">cookingInstruction:</span>
                {order.cookingInstruction}
              </p>

              {order.isCompleted ? (
                <p
                  style={{
                    background: "green",
                    color: "white",
                    width: "fit-content",
                    padding: "1px 10px",
                    borderRadius: "100px",
                    margin: "10px 0px",
                  }}
                >
                  Completed
                </p>
              ) : (
                <>
                  <p
                    style={{
                      background: "yellow",
                      width: "fit-content",
                      padding: "1px 10px",
                      borderRadius: "100px",
                      margin: "10px 0px",
                    }}
                  >
                    Pending
                  </p>
                  <button
                    style={{ background: "green" }}
                    onClick={() => completeOrder(order._id)}
                  >
                    Complete
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Orders;
