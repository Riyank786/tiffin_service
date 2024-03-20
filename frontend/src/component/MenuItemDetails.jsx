import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
// import toast, { Toaster } from 'react-hot-toast';
import axios from "axios";
import './MenuItem.css';

const MenuItemDetail = () => {
  const { itemId } = useParams();

  const [menuItem, setMenuItem] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [formState, setFormState] = useState({
    mealPlan: 'Trial',
    deliveryTime: '',
    cookingInstruction: '',
  });
  const navigate=useNavigate();
  const [orderData, setOrderData] = useState(null);

  const handleDeliveryTimeChange = (e) => {
    const selectedDeliveryTime = e.target.value;
    setFormState({ ...formState, deliveryTime: selectedDeliveryTime });
  };

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };


  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();

    const formData = {
      quantity: quantity,
      menuItemId: itemId,
      customer: JSON.parse(localStorage.getItem('data'))._id,
      seller: menuItem.seller,
      ...formState,
    };

    console.log(formData);
    

      // try {
      //   const response = await axios.post("http://localhost:8080/api/v1/pay/creatorder", {
      //     amount: menuItem.price * quantity * 100, // Convert total to paise
      //     currency: "INR",
      //   });

      //   const orderData = response.data;
      //   console.log(orderData);
      //   setOrderData(orderData);

      //   if (orderData.id) {
      //     const razorpayOptions = {
      //       key: "rzp_test_2Mr5UneituKZXx",
      //       amount: orderData.amount,
      //       currency: orderData.currency,
      //       name: "Your Company Name",
      //       description: "Payment for your order",
      //       order_id: orderData.orderId,
      //       handler: function (response) {
      //         console.log("Payment successful:", response);
      //         // toast.success("order Placed")
      //         navigate('/')
      //       },
      //     };

      //     const paymentObject = new window.Razorpay(razorpayOptions);
      //     paymentObject.open();
      //   }
      // } catch (error) {
      //   console.error("Error creating Razorpay order:", error);
      // }
    

   await axios.post(`${process.env.REACT_APP_API_URL}/order/add-order`, formData)
      .then(response => {
        console.log('Order placed successfully:', response.data);
        alert("Order placed successfully");
      })
      .catch(error => {
        if (error.response) {

          console.error('Server Error:', error.response.data);
          console.error('Status Code:', error.response.status);
          console.error('Headers:', error.response.headers);
        } else if (error.request) {

          console.error('No response received:', error.request);
        } else {

          console.error('Error setting up the request:', error.message);
        }
        console.error('Error placing order:', error.config);
      });
  };


  useEffect(() => {

    axios.get(`${process.env.REACT_APP_API_URL}/menu/getById/${itemId}`).then(response => {
      setMenuItem(response.data);
      console.log(response.data.seller);
    })
      .catch(error => {
        console.error('Error fetching menu item:', error);
      });
  }, [itemId]);

  const total = menuItem.price * quantity;
  return (
    <div>
      <h2 className="text-center">Menu Item Detail</h2>
      <div className="row">
        <div className="col-6">
          <img src={`/images/${menuItem.image}`} alt={menuItem.name} className='img-fluid' />
          <p><span className="fw-bold">Meal Plan:</span> Trial (1 day), Weekly (5 Days), Monthly (20 Days)</p>
          <h4>Please read Offer & Terms:</h4>
          <p>Cut-off time is 8:00 PM the previous day which means place an order before the cut-off time</p>
          <p>Flexi Plans: If changes in current orders, skip a delivery, pause the plan, or cancel your plan, kindly inform us before the cut-off time. </p>
          <p>Delivery time may affect by +/- 45 mins depending on traffic, road closures and weather conditions</p>
          <p>Extra items should only be ordered along with a meal plan and from the same seller onlyExtra items should only be ordered along with a meal plan and from the same seller only   </p>
          <p>Refund Policy: A cancellation fee of $5 on a trial order and $10 on all other orders is applicable.</p>
        </div>


        <div className="col-6" >
          <form action="" onSubmit={handleSubmit}>

            <p className="fs-2 fw-bold">{menuItem.name}</p>
            <p className="fs-5">{menuItem.description}</p>
            <p className="text-danger fs-2">&#8377;{menuItem.price}</p>
            <div className="form-group">
              <label htmlFor="meal">Meal Plan</label>
              <select
                className="form-select"
                aria-label="Default select example"
                name="mealPlan"
                value={formState.mealPlan}
                onChange={handleInputChange}
              >
                <option value="Trial">Trial</option>
                <option value="Weekly">Weekly</option>
                <option value="Monthly">Monthly</option>
              </select>

            </div>

            <div className="container my-4">
              <p className="fw-bold fs-5">Select Delivery Time</p>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="10 AM to 12 PM"
                      onChange={handleDeliveryTimeChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      10 AM to 12 AM
                    </label>
                  </div>


                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value="12 PM to 2 PM"
                      onChange={handleDeliveryTimeChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      12 PM to 2 PM
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value=" 6 PM to 7 PM"
                      onChange={handleDeliveryTimeChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      6 PM to 7 PM
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value=" 7 PM to 8 PM"
                      onChange={handleDeliveryTimeChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      7 PM to 8 PM
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value=" 8 PM to 9 PM"
                      onChange={handleDeliveryTimeChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      8 PM to 9 PM
                    </label>
                  </div>
                </div>
                <div className="col-md-4 mb-3">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                      value=" 9 PM to 10 PM"
                      onChange={handleDeliveryTimeChange}
                    />
                    <label className="form-check-label" htmlFor="flexRadioDefault1">
                      9 PM to 10 PM
                    </label>
                  </div>
                </div>
              </div>
            </div>



            <div className="mb-3">
              <label htmlFor="quantity" className="fw-bold">
                Quantity:
              </label>
              <div className="input-group">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleDecrement}
                >
                  -
                </button>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="form-control text-center"
                  value={quantity}
                  onChange={(e) => setQuantity(parseInt(e.target.value))}
                />
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleIncrement}>
                  +
                </button>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="cookingInstruction" className="fs-4 fw-bold">Cooking Instructions</label>
              <input
                className="form-control"
                type="text"
                id="cookingInstruction"
                name="cookingInstruction"
                value={formState.cookingInstruction}
                onChange={handleInputChange}
                placeholder="Add cooking instruction"
                aria-label="Cooking Instruction"
              />
            </div>

            <p className="fs-4 fw-bold">Total Price: &#8377;{total}</p>
            <button  type="submit" className="btn btn-success btn-lg d-block mx-auto">
              Order Now
            </button>

          </form>

        </div>
      </div>
{/* <Toaster/> */}




    </div>
  );
};

export default MenuItemDetail;
