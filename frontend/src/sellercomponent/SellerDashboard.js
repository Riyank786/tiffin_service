import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import React Router Link
import "./SellerDashboard.css"; // Import the CSS file
import Header from "./Header";

const SellerDashboard = () => {
  // Sample order summary data (replace with your data)
  const [orders, setOrders] = useState([]);
  const [orderSummary, setOrderSummary] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
  });

  const sellerId = JSON.parse(localStorage.getItem("data"))._id;

  useEffect(() => {
    // Fetch orders from the API when the component mounts
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/order/get-order`);
        if (!response.ok) {
          throw new Error("Failed to fetch orders");
        }
        const data = await response.json();
        const filteredOrders = data.filter((element) => element.sellerData._id === sellerId);
        // Set the filtered orders
        setOrders(filteredOrders);
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, [sellerId]); // Added sellerId as a dependency

  useEffect(() => {
    // Calculate order summary when orders state changes
    setOrdersToCategory();
  }, [orders]); // Added orders as a dependency

  const setOrdersToCategory = () => {
    const newOrderSummary = {
      totalOrders: orders.length,
      pendingOrders: 0,
      completedOrders: 0,
    };

    orders.forEach((order) => {
      if (order.isCompleted) newOrderSummary.completedOrders++;
      else newOrderSummary.pendingOrders++;
    });

    setOrderSummary(newOrderSummary);
  };

  return (
    <>
      <div className="seller-dashboard">
        <h2>Seller Dashboard</h2>
        <div className="order-summary">
          <div className="summary-item">
            <h3>Total Orders</h3>
            <p>{orderSummary.totalOrders}</p>
          </div>
          <div className="summary-item">
            <h3>Pending Orders</h3>
            <p>{orderSummary.pendingOrders}</p>
          </div>
          <div className="summary-item">
            <h3>Completed Orders</h3>
            <p>{orderSummary.completedOrders}</p>
          </div>
        </div>
        <div className="dashboard-shortcuts">
          <Link to="/orders" className="shortcut-link">
            Orders
          </Link>
          <Link to="/menu" className="shortcut-link">
            Menu Management
          </Link>
          {/* Add more shortcuts as needed */}
        </div>
      </div>
    </>
  );
};

export default SellerDashboard;
