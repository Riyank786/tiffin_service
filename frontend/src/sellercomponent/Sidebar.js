// Sidebar.js
import React from 'react';
import { Header } from './Header'
const Sidebar = () => {
  return (
    <aside className="sidebar">
      <nav>
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/menu">Menu Management</a></li>
          <li><a href="/orders">Orders</a></li>
          <li><a href="/profile">Profile</a></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
