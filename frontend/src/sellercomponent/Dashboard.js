// Dashboard.js
import React from 'react';
import  Header  from './Header'
import SellerDashboard from './SellerDashboard';
const Dashboard = () => {
  return (
    <><Header/>
    <div className="dashboard">
     
      <SellerDashboard/>
      {/* Dashboard content goes here */}
    </div></>
  );
};

export default Dashboard;
