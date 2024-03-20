// SellerDashboard.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import React Router Link
import './SellerDashboard.css'; // Import the CSS file
import  Header  from './Header'
const SellerDashboard = () => {
  // Sample order summary data (replace with your data)
  const orderSummary = {
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
  };

  return (<>
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
  </div></>
  );
};

export default SellerDashboard;
