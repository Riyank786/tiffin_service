// MenuManagement.js
import React, { useState } from 'react';
import MenuForm from './MenuForm';
import  Header  from './Header'

const MenuManagement = () => {
  const [menuItems, setMenuItems] = useState([]);

  const addMenuItem = (menuItem) => {
    setMenuItems([...menuItems, menuItem]);
    // You can send the data to the backend for saving to MongoDB here.
  };

  return (
   <> <Header/><div     style={{
    backgroundImage:
      "url('https://img.freepik.com/free-vector/fruit-vegetables-background_23-2148497857.jpg?w=740&t=st=1695718195~exp=1695718795~hmac=ce28be1ae27a88287e3c0ffa1b6a25dc025f082fafc294e070cf911b56aac35f')",
      minHeight: '100vh',
    backgroundPosition: 'center',
    backgroundSize: "cover"
  }}>
   
   <MenuForm addMenuItem={addMenuItem} />
   <ul>
     {menuItems.map((item, index) => (
       <li key={index}>
         <strong>Name:</strong> {item.name} <br />
         <strong>Description:</strong> {item.description} <br />
         <strong>Price:</strong> ${item.price}
       </li>
     ))}
   </ul>
 </div></>
  );
};

export default MenuManagement;
