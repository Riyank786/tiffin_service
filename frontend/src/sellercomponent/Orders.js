// Order.js
import React, { useState ,useEffect} from 'react';
import './Orders.css';
import  Header from './Header' // Import the OrderDetailsModal component

const Orders = () => {
  
  const [orders, setOrders] = useState([]);
  const sellerId=JSON.parse(localStorage.getItem("data"))._id;
 
  useEffect(() => {
    // Fetch orders from the API when the component mounts
    fetch(`${process.env.REACT_APP_API_URL}/order/get-order`)
      .then((response) => response.json())
      .then((data) => {
      
        const filteredOrders = data.filter((element) => element.sellerData._id === sellerId);

      // Set the filtered orders
      setOrders(filteredOrders);
      //  } 
        
      })
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);
  

 return (<><Header/>
 <div>
   <h2>Orders</h2>
   <div className="orders-container">
     {orders.map((order) => (
       <div className="order-card" key={order.id}>
         <p><span className='fw-bold'>Customer:</span>{order.customerData.name}</p>
         <p><span className='fw-bold'>Address:</span>{order.customerData.address}</p> 
         <p><span className='fw-bold'>deliveryTime:</span>{order.deliveryTime}</p>
         <p><span className='fw-bold'>mealPlan:</span>{order.mealPlan}</p>
         <p><span className='fw-bold'>quantity:</span>{order.quantity}</p>
         <p><span className='fw-bold'>cookingInstruction:</span>{order.cookingInstruction}</p>
         
       </div>
     ))}
   </div>
   
 </div></>
);
    }

export default Orders;
